import { useCallback, useEffect, useState } from 'react';

import fetchCodleWord from './requests';

const useCodle = () => {
  const [dailyWord, setDailyWord] = useState('');

  const getDailyWord = useCallback(async () => {
    const fetchedWord = await fetchCodleWord();
    setDailyWord(fetchedWord);
  }, []);

  useEffect(() => {
    getDailyWord();
  }, [getDailyWord]);

  return dailyWord;
}

export default useCodle;
