import { GameBoard } from "../models/Codle";

export interface CodleInterface {
  playerId: string;
  solution: string;
  activeRow: number;
  gameBoard: GameBoard;
  // didWin: boolean;
  // didLose: boolean;
  // dailyGuesses: string[];
  // dailyMap: StyleMap[];
  setPlayerId: React.Dispatch<React.SetStateAction<string>>;
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  // setDidWin: React.Dispatch<React.SetStateAction<boolean>>;
  // setDidLose: React.Dispatch<React.SetStateAction<boolean>>;
  // setDailyGuesses: React.Dispatch<React.SetStateAction<string[]>>;
  // setDailyMap: React.Dispatch<React.SetStateAction<StyleMap[]>>;
}
