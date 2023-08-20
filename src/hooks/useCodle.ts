import { useCallback, useEffect, useState } from 'react';

import { fetchCodleWord, fetchPlayerData, postPlayerData } from './requests';
import { CodlePlayerData, StyleMap } from '../@types/codle';
import { getStoragePlayerId, setStoragePlayerId } from '../utils/codle';
import { GameBoard } from '../models/Codle';

const useCodle = () => {
  const [playerId, setPlayerId] = useState(getStoragePlayerId() ?? '');
  const [solution, setSolution] = useState('');
  const [currentBoard, setCurrentBoard] = useState<GameBoard>(new GameBoard());

  const getDailyWord = useCallback(async () => {
    const fetchedWord = await fetchCodleWord();
    setSolution(fetchedWord);
  }, []);

  const getDailyBoard = useCallback(async () => {
    if (playerId) {
      const fetchedData = (await fetchPlayerData(playerId)) as CodlePlayerData;
      setCurrentBoard(
        new GameBoard(
          fetchedData?.didWin ?? false,
          fetchedData?.guesses ?? [],
          (JSON.parse(fetchedData?.guessMap) as StyleMap[]) ?? []
        )
      );
    } else {
      const fetchedData = await postPlayerData();
      setPlayerId(fetchedData.id);
      setStoragePlayerId(fetchedData.id);
    }
  }, []);

  useEffect(() => {
    getDailyWord();
    getDailyBoard();
  }, [getDailyWord, getDailyBoard]);

  return {
    playerId,
    solution,
    currentBoard,
    setCurrentBoard
  };
};

export default useCodle;
