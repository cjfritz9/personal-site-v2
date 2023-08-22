import React from 'react';
import { GameBoard } from '../models/Codle';

export interface SiteInterface {
  isUsingTerminal: boolean;
  setIsUsingTerminal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CodleInterface {
  playerId: string;
  solution: string;
  gameWon: boolean;
  gameLost: boolean;
  startingBoard: GameBoard;
  isLoading: boolean;
  setGameWon: React.Dispatch<React.SetStateAction<boolean>>;
  setGameLost: React.Dispatch<React.SetStateAction<boolean>>;
}
