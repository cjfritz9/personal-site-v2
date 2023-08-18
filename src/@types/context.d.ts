type StyleMap = { bgColor: string }[];

export interface CodleInterface {
  solution: string;
  activeRow: number;
  didWin: boolean;
  didLose: boolean;
  dailyGuesses: string[];
  dailyMap: StyleMap[];
  setSolution: React.Dispatch<React.SetStateAction<string>>;
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  setDidWin: React.Dispatch<React.SetStateAction<boolean>>;
  setDidLose: React.Dispatch<React.SetStateAction<boolean>>;
  setDailyGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  setDailyMap: React.Dispatch<React.SetStateAction<StyleMap[]>>;
}

export interface CodleUserData {
  updatedAt: string;
  guesses: string[];
  guessMap: StyleMap[];
  didWin: boolean;
}
