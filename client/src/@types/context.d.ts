import React from 'react';
import { GameBoard } from '../models/Codle';
import { Directories } from './about';
import { Location, NavigateFunction } from 'react-router';

export interface SiteInterface {
  isUsingTerminal: boolean;
  currentDirectory: Directories;
  currentDisplayContent: string;
  isSudoUser: boolean;
  location: Location;
  navigate: NavigateFunction;
  setIsUsingTerminal: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentDirectory: React.Dispatch<React.SetStateAction<Directories>>;
  setCurrentDisplayContent: React.Dispatch<React.SetStateAction<string>>;
  setIsSudoUser: React.Dispatch<React.SetStateAction<boolean>>;
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

export type Pages = 'home' | 'about' | 'projects' | 'sudo';
