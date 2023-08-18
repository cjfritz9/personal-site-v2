import { CodleUserData, StyleMap } from '../@types/context';

const storageName = 'codle-data';

export const validateEntry = (
  guess: string,
  solution: string,
  map: StyleMap
) => {
  let matches = '';
  for (let i = 0; i < solution.length; i++) {
    if (solution[i] === guess[i]) {
      matches += solution[i];
      map[i].bgColor = 'green.500';
    } else {
      if (
        solution.includes(guess[i]) &&
        !matches.includes(solution[i]) &&
        !matches.includes(guess[i])
      ) {
        map[i].bgColor = 'Accent.orange';
      }
    }
  }
  const storageData = localStorage.getItem(storageName);

  if (!storageData) {
    localStorage.setItem(storageName, '');
  }

  const data = JSON.parse(storageData!) as CodleUserData;

  if (getHasTodaysData()) {
    const updatedGuesses = [...data.guesses, guess];
    const updatedMap = [...data.guessMap, map];
    upsertUserData({
      updatedAt: data.updatedAt,
      guesses: updatedGuesses,
      guessMap: updatedMap,
      didWin: matches.length === 5
    });
  } else {
    upsertUserData({
      updatedAt: new Date().toUTCString(),
      guesses: [guess],
      guessMap: [map],
      didWin: matches.length === 5
    });
  }
  return map;
};

export const upsertUserData = (data: CodleUserData) => {
  const date = new Date().toUTCString();
  data.updatedAt = new Date().toUTCString();
  localStorage.setItem(storageName, JSON.stringify(data));
};

export const getHasTodaysData = () => {
  const storageData = localStorage.getItem(storageName);
  let hasTodaysData = false;

  if (!storageData) {
    return (hasTodaysData = false);
  }

  const data = JSON.parse(storageData) as CodleUserData;
  const currentDate = new Date();
  const storageDate = new Date(data.updatedAt);

  if (
    currentDate.getDate() > storageDate.getDate() ||
    currentDate.getMonth() > storageDate.getMonth() ||
    currentDate.getFullYear() > storageDate.getFullYear()
  ) {
    localStorage.setItem(
      storageName,
      JSON.stringify({
        updatedAt: data.updatedAt,
        guesses: [],
        guessMap: [],
        didWin: false
      })
    );
    return (hasTodaysData = false);
  }

  return (hasTodaysData = true);
};

export const getTodaysData = () => {
  return JSON.parse(localStorage.getItem(storageName)!) as CodleUserData;
};
