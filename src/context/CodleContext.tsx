import React, { useEffect, useState } from 'react';

import useCodle from '../hooks/useCodle';
import { CodleInterface } from '../@types/context';
import { ContextProps } from '../@types/props';
import { StyleMap } from '../@types/codle';
import { getPlayerId, hasPlayedToday } from '../utils/codle';

export const CodleContext = React.createContext<CodleInterface | null>(null);

export const CodleProvider: React.FC<ContextProps> = ({ children }) => {
  const [playerId, setPlayerId] = useState('');
  const [activeRow, setActiveRow] = useState(0);
  const [didWin, setDidWin] = useState(false);
  const [didLose, setDidLose] = useState(false);
  const [dailyGuesses, setDailyGuesses] = useState<string[]>([]);
  const [dailyMap, setDailyMap] = useState<StyleMap[]>([]);

  const { solution, playerData } = useCodle();

  useEffect(() => {
    if (playerData && hasPlayedToday(new Date(playerData.updatedAt))) {
      setPlayerId(playerData.id);
      setDidWin(playerData.didWin);
      setDailyGuesses(playerData.guesses);
      setDailyMap(playerData.guessMap);
    }
  }, [playerData]);

  console.log('pid', playerId)
  console.log('solution', solution)
  console.log('pdata', playerData)

  return (
    <CodleContext.Provider
      value={{
        playerId,
        solution,
        activeRow,
        didWin,
        didLose,
        dailyGuesses,
        dailyMap,
        setPlayerId,
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
