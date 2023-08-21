import React, { useEffect, useState } from 'react';

import useCodle from '../hooks/useCodle';
import { CodleInterface } from '../@types/context';
import { ContextProps } from '../@types/props';

export const CodleContext = React.createContext<CodleInterface | null>(null);

export const CodleProvider: React.FC<ContextProps> = ({ children }) => {
  const { playerId, solution, startingBoard, isLoading } = useCodle();
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  useEffect(() => {
    setGameWon(startingBoard.isWon);
    setGameLost(startingBoard.isLost);
  }, [startingBoard]);

  return (
    <CodleContext.Provider
      value={{
        playerId,
        solution,
        gameWon,
        gameLost,
        startingBoard,
        isLoading,
        setGameWon,
        setGameLost,
      }}
    >
      {children}
    </CodleContext.Provider>
  );
};
