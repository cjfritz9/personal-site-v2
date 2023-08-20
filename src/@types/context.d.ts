import { GameBoard } from '../models/Codle';

export interface CodleInterface {
  playerId: string;
  solution: string;
  activeRow: number;
  currentBoard: GameBoard;
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  setCurrentBoard: React.Dispatch<React.SetStateAction<GameBoard>>;
}
