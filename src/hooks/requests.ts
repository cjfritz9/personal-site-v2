import axios from 'axios';
import { UpdatedPlayerData } from '../@types/codle';

const API_URL = 'https://codle-api-xbai7z5q3q-uc.a.run.app';

export const fetchCodleWord = async () => {
  const result = await axios.get(`${API_URL}/codle/word`);
  if (result.status !== 200) return;

  const { codleWord } = result.data;
  return codleWord;
};

export const fetchPlayerData = async (playerId: string) => {
  const result = await axios.get(`${API_URL}/users/${playerId}`);
  if (result.status !== 200) return;

  return result.data;
};

export const postPlayerData = async () => {
  const result = await axios.post(`${API_URL}/users`);
  console.log('post result: ', result.status, result.data);
  if (result.status !== 201) return;

  return result.data;
};

export const updatePlayerData = async (
  playerId: string,
  newData: UpdatedPlayerData
) => {
  const result = await axios.patch(`${API_URL}/users/${playerId}`, {
    data: newData
  });
  if (result.status !== 200) return;

  return result.data;
};
