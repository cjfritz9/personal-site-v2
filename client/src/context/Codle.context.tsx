import React, { useEffect, useState } from 'react';

import useCodle from '../hooks/useCodle';
import { CodleInterface } from '../@types/context';
import { ContextProps } from '../@types/props';

export const CodleContext = React.createContext<CodleInterface | null>(null);

export const CodleProvider: React.FC<ContextProps> = ({ children }) => {
  const { playerId, solution, startingBoard, isLoading } = useCodle();
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

  const { isWon: isWonDaily, isLost: isLostDaily } = startingBoard;

  useEffect(() => {
    setGameWon(isWonDaily);
    setGameLost(isLostDaily);
  }, [isWonDaily, isLostDaily]);

  return (
    <CodleContext.Provider
      value={{
        playerId,
        solution,
        startingBoard,
        isLoading,
        gameWon,
        gameLost,
        setGameWon,
        setGameLost
      }}
    >
      {children}
    </CodleContext.Provider>
  );
};
