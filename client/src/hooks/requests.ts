import axios from 'axios';
import { UpdatedPlayerData } from '../@types/codle';
import { setStoragePlayerId } from '../utils/codle';

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
      console.error(err);
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

// EXTERNAL CODLE GAME API

const codleRequest = axios.create({
  baseURL: 'https://games.cjfritz.dev',
  timeout: 5000
});

export const fetchCodleWord = async () => {
  const result = await codleRequest.get('/codle/word');
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
