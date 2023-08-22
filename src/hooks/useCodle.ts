import { useCallback, useEffect, useState } from 'react';

import {
  fetchCodleWord,
  fetchPlayerData,
  postPlayerData,
  updatePlayerData
} from './requests';
import { CodlePlayerData, StyleMap } from '../@types/codle';
import {
  getStoragePlayerId,
  hasPlayedToday,
  setStoragePlayerId
} from '../utils/codle';
import { GameBoard } from '../models/Codle';

const useCodle = () => {
  const [playerId, setPlayerId] = useState(getStoragePlayerId() ?? '');
  const [solution, setSolution] = useState('');
  const [startingBoard, setStartingBoard] = useState(new GameBoard());
  const [isLoading, setIsLoading] = useState(true);

  const getDailyWord = useCallback(async () => {
    const fetchedWord = await fetchCodleWord();
    setSolution(fetchedWord);
  }, []);

  const getDailyBoard = useCallback(async () => {
    if (playerId) {
      const fetchedData = (await fetchPlayerData(playerId)) as CodlePlayerData;
      if (hasPlayedToday(new Date(fetchedData.updatedAt))) {
        setStartingBoard(
          new GameBoard(
            fetchedData?.didWin ?? false,
            fetchedData?.guesses ?? [],
            (JSON.parse(fetchedData?.guessMap) as StyleMap[]) ?? []
          )
        );
      } else {
        await updatePlayerData(playerId, {
          guesses: [],
          guessMap: '',
          didWin: false
        });
      }
    } else {
      const fetchedData = await postPlayerData();
      setStoragePlayerId(fetchedData.id);
      setPlayerId(fetchedData.id);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getDailyWord();
    getDailyBoard();
  }, [getDailyWord, getDailyBoard]);

  return {
    playerId: playerId as string,
    solution,
    startingBoard,
    isLoading
  };
};

export default useCodle;
