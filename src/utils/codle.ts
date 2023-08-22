import { StyleMap } from '../@types/codle';

const storageName = 'codle-id';

export const handleUpdateBoard = (
  guess: string,
  solution: string
) => {
  let matches = '';
  let wonGame = false;
  const map = [
    { bgColor: 'Primary.dkGray' },
    { bgColor: 'Primary.dkGray' },
    { bgColor: 'Primary.dkGray' },
    { bgColor: 'Primary.dkGray' },
    { bgColor: 'Primary.dkGray' }
  ];
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

export const getStyleMap = (isActive: boolean): StyleMap => {
  return [
    { bgColor: isActive ? 'Primary.dkGray' : 'Primary.black' },
    { bgColor: isActive ? 'Primary.dkGray' : 'Primary.black' },
    { bgColor: isActive ? 'Primary.dkGray' : 'Primary.black' },
    { bgColor: isActive ? 'Primary.dkGray' : 'Primary.black' },
    { bgColor: isActive ? 'Primary.dkGray' : 'Primary.black' }
  ];
};

export const getStoragePlayerId = () => {
  return localStorage.getItem(storageName);
};

export const setStoragePlayerId = (playerId: string) => {
  return localStorage.setItem(storageName, playerId);
};

export const hasPlayedToday = (playersDate: Date) => {
  if (playersDate.getDate() < new Date().getDate()) {
    return false;
  }
  return true;
};
