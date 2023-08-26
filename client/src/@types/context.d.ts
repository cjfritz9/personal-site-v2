import React from 'react';
import { GameBoard } from '../models/Codle';
import { Directories } from './about';
import { Location } from 'react-router';

export interface SiteInterface {
  isUsingTerminal: boolean;
  currentDirectory: Directories;
  currentDisplayContent: string;
  location: Location;
  setIsUsingTerminal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDirectory: React.Dispatch<React.SetStateAction<Directories>>;
  setCurrentDisplayContent: React.Dispatch<React.SetStateAction<string>>;
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

export type Pages = 'home' | 'about' | 'projects';
