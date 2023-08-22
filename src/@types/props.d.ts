import React from 'react';
import { StyleMap } from './context';
import { GameBoard } from '../models/Codle';

export interface PanelProps {
  content: any;
  variant: 'left' | 'right' | 'center' | 'mobile';
  width?: string;
  styles?: any;
}

export interface BoltProps {
  variant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface CodleInputRowProps {
  // isActive: boolean;
  // dailyGuess: string | undefined;
  // dailyMap: StyleMap | undefined;
  // currentBoard: GameBoard;
  // setCurrentBoard: React.Dispatch<React.SetStateAction<GameBoard>>;
  isActive: boolean;
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}

export interface ContextProps {
  children: React.ReactNode;
}
