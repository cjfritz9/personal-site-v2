import { useCallback, useEffect, useState } from 'react';

import { fetchCodleWord, fetchPlayerData, postPlayerData } from './requests';
import { CodlePlayerData } from '../@types/codle';
import { getPlayerId, setPlayerId } from '../utils/codle';
import { PlayerData } from '../models/Codle';

const useCodle = () => {
  const [solution, setSolution] = useState('');
  const [currentBoard, setCurrentBoard] = useState<any>();

  const playerId = getPlayerId();

  const getDailyWord = useCallback(async () => {
    const fetchedWord = await fetchCodleWord();
    setSolution(fetchedWord);
  }, []);

  const getDailyBoard = useCallback(async () => {
    if (playerId) {
      const fetchedData = await fetchPlayerData(playerId);
      // setPlayerData(fetchedData);
    } else {
      const fetchedData = await postPlayerData();
      if (fetchedData.guessMap.length) {
        fetchedData.guessMap = JSON.parse(fetchedData.guessMap);
      }
      console.log('useCodle fetched data', fetchedData);
      // setPlayerData(fetchedData);
      setPlayerId(fetchedData.id);
    }
  }, []);

  useEffect(() => {
    getDailyWord();
    getDailyBoard();
  }, [getDailyWord, getDailyBoard]);

  return {
    solution,
    // playerData
  };
};

export default useCodle;
