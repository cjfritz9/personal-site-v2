import axios from 'axios';
import { UpdatedPlayerData } from '../@types/codle';
import { setStoragePlayerId } from '../lib/codle';
import { JobAppData, JobAppResponse } from '../@types/responses';

// INTERNAL CLIENT API

const apiRequest = axios.create({
  timeout: 5000
});

export const fetchSnippets = async () => {
  return apiRequest
    .get('/v1/snippets')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.warn(err);
      return [];
    });
};

export const fetchRawSnippet = async (rawUrl: string) => {
  return apiRequest
    .get(`/v1/snippets/file?rawUrl=${rawUrl}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

// EXTERNAL TRACKING API

const trackingRequest = axios.create({
  baseURL: 'https://tracking.cjfritz.dev/v1',
  timeout: 10000
});

export const fetchJobApps = async () => {
  return trackingRequest
    .get('/job-apps')
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const postJobApp = async (appData: JobAppData) => {
  return trackingRequest
    .post('/job-apps', appData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const patchJobApp = async ({ id, ...appData }: JobAppResponse) => {
  return trackingRequest
    .patch(`/job-apps/${id}`, appData)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

// EXTERNAL CODLE GAME API

const codleRequest = axios.create({
  baseURL: 'https://games.cjfritz.dev',
  timeout: 5000
});

export const fetchCodleWord = async () => {
  const result = await codleRequest.get(
    `/codle/word?timezoneOffset=${new Date().getTimezoneOffset()}`
  );
  if (result.status !== 200) return;

  const { codleWord } = result.data;
  return codleWord;
};

export const fetchPlayerData = async (playerId: string) => {
  const result = await codleRequest.get(`/users/${playerId}`);
  if (result.status !== 200) return;

  return result.data;
};

export const postPlayerData = async () => {
  const result = await codleRequest.post('/users');
  if (result.status !== 201) return;
  setStoragePlayerId(result.data.id);

  return result.data;
};

export const updatePlayerData = async (
  playerId: string,
  newData: UpdatedPlayerData
) => {
  const result = await codleRequest.patch(`/users/${playerId}`, {
    didWin: newData.didWin,
    guesses: newData.guesses,
    guessMap: newData.guessMap
  });
  if (result.status !== 200) return;

  return result.data;
};

// EXTERNAL EMAIL API

export const postContactForm = async (data: object) => {
  const response = await axios.post(
    'https://mail-server-379822.uc.r.appspot.com/personal/send',
    data
  );

  if (response.data.success) {
    return { success: 'Your Message Was Sent' };
  } else {
    return { error: 'Server Error' };
  }
};
