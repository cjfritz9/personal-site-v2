import React, { useState } from 'react';

import { CodleInterface, StyleMap } from '../@types/context';
import { ContextProps } from '../@types/props';

export const CodleContext = React.createContext<CodleInterface | null>(null);

export const CodleProvider: React.FC<ContextProps> = ({ children }) => {
  const [solution, setSolution] = useState('');
  const [activeRow, setActiveRow] = useState(0);
  const [didWin, setDidWin] = useState(false);
  const [didLose, setDidLose] = useState(false);
  const [dailyGuesses, setDailyGuesses] = useState<string[]>([]);
  const [dailyMap, setDailyMap] = useState<StyleMap[]>([]);

  return (
    <CodleContext.Provider
      value={{
        solution,
        activeRow,
        didWin,
        didLose,
        dailyGuesses,
        dailyMap,
        setSolution,
        setActiveRow,
        setDidWin,
        setDidLose,
        setDailyGuesses,
        setDailyMap
      }}
    >
      {children}
    </CodleContext.Provider>
  );
};
