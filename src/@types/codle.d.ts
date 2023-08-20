type StyleMap = { bgColor: string }[];

export interface CodlePlayerData {
  id: string;
  updatedAt: string;
  guesses: string[];
  guessMap: StyleMap[];
  didWin: boolean;
}

export interface UpdatedPlayerData {
  guesses: string[];
  guessMap: string;
  didWin: boolean;
}