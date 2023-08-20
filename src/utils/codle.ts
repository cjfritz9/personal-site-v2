import { StyleMap } from '../@types/codle';

const storageName = 'codle-id';

export const handleUpdateBoard = (
  guess: string,
  solution: string,
  map: StyleMap
) => {
  let matches = '';
  let wonGame = false;
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

  if (guess.toLowerCase() === solution.toLowerCase()) {
    wonGame = true;
  }

  return { wonGame, map };
};

export const getPlayerId = () => {
  return localStorage.getItem(storageName);
};

export const setPlayerId = (playerId: string) => {
  return localStorage.setItem(storageName, playerId);
};

export const hasPlayedToday = (playersDate: Date) => {
  if (playersDate.getDate() > new Date().getDate()) {
    return false;
  }
  return true;
};
