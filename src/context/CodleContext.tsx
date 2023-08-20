import React, { useEffect, useState } from 'react';

import useCodle from '../hooks/useCodle';
import { CodleInterface } from '../@types/context';
import { ContextProps } from '../@types/props';

export const CodleContext = React.createContext<CodleInterface | null>(null);

export const CodleProvider: React.FC<ContextProps> = ({ children }) => {
  const [activeRow, setActiveRow] = useState(0);

  const { playerId, solution, currentBoard, setCurrentBoard } = useCodle();

  return (
    <CodleContext.Provider
      value={{
        playerId,
        solution,
        activeRow,
        currentBoard,
        setActiveRow,
        setCurrentBoard
      }}
    >
      {children}
    </CodleContext.Provider>
  );
};
