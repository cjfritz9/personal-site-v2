import { useCallback, useEffect, useState } from 'react';

import { fetchCodleWord, fetchPlayerData, postPlayerData } from './requests';
import { CodlePlayerData } from '../@types/codle';
import { getPlayerId, setPlayerId } from '../utils/codle';

const useCodle = () => {
  const [solution, setSolution] = useState('');
  const [playerData, setPlayerData] = useState<CodlePlayerData>();

  const playerId = getPlayerId();

  const getDailyWord = useCallback(async () => {
    const fetchedWord = await fetchCodleWord();
    setSolution(fetchedWord);
  }, []);

  const getPlayerData = useCallback(async () => {
    if (playerId) {
      const fetchedData = await fetchPlayerData(playerId);
      setPlayerData(fetchedData);
    } else {
      const fetchedData = await postPlayerData();
      setPlayerData(fetchedData);
      setPlayerId(fetchedData.id)
    }
  }, [playerId]);

  useEffect(() => {
    getDailyWord();
    getPlayerData();
  }, [getDailyWord, getPlayerData]);

  return {
    solution,
    playerData
  };
};

export default useCodle;
