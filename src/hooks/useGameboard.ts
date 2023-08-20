import { useCallback, useState } from 'react';
import { getPlayerId, setPlayerId } from '../utils/codle';
import { fetchPlayerData, postPlayerData } from './requests';

const useGameboard = () => {
  const [currentBoard, setCurrentBoard] = useState<any>({});
  const [playerData, setPlayerData] = useState<any>({});

  const playerId = getPlayerId();

  const getPlayerData = useCallback(async () => {
    if (playerId) {
      const fetchedData = await fetchPlayerData(playerId);
      setPlayerData(fetchedData);
    } else {
      const fetchedData = await postPlayerData();
      console.log('useCodle fetched data', fetchedData);
      setPlayerData(fetchedData);
      setPlayerId(fetchedData.id);
    }
  }, []);

  


};
