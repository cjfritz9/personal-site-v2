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

// Terminal Types and Interfaces

export interface AutoCompletionResult {
  type: string;
  description: string;
}

export interface SearchResult {
  directory: string;
  name: string;
  handle: string;
}

export interface CDResult {
  dirname: string;
  handle: string;
}

export type TerminalModes = 'auto-complete' | 'search' | 'cd';

export interface SuggestionsProps {
  mode: TerminalModes;
  autoCompleteResults?: AutoCompletionResult[];
  searchResults?: SearchResult[];
  cdResults?: CDResult[];
}
