import { GameBoard } from '../models/Codle';

export interface CodleInterface {
  playerId: string;
  solution: string;
  gameWon: boolean;
  gameLost: boolean;
  startingBoard: GameBoard;
  setGameWon: React.Dispatch<React.SetStateAction<boolean>>;
  setGameLost: React.Dispatch<React.SetStateAction<boolean>>;
}
