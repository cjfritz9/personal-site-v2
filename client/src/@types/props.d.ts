import React from 'react';
import { StyleMap } from './context';
import { GameBoard } from '../models/Codle';
import { IconType } from 'react-icons';
import { Directories } from './about';

export interface PanelProps {
  content: any;
  variant: 'left' | 'right' | 'center' | 'mobile';
  clickHandler?: () => void;
  width?: string;
  styles?: any;
}

export interface BoltProps {
  variant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface CodleInputRowProps {
  isActive: boolean;
  currentBoard: GameBoard;
  onUpdateBoard: (gameBoard: GameBoard) => void;
  index: number;
}

export interface ContextProps {
  children: React.ReactNode;
}

// Terminal Types and Interfaces
export type TerminalModes = 'auto-complete' | 'search' | 'cd' | 'sudo';

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

export interface SuggestionsProps {
  mode: TerminalModes;
  autoCompleteResults?: AutoCompletionResult[];
  searchResults?: SearchResult[];
  cdResults?: CDResult[];
}

// AboutMe Props
export interface NavIconProps {
  baseIcon: IconType;
  hoveredIcon: IconType;
  tooltip: string;
  isActive: boolean;
  onClick: () => void;
}

export interface FolderProps {
  folderColor: string;
  folderName: string;
  items: ItemProps[];
}

export interface SectionProps {
  title: string;
  folders: FolderProps[];
}

export interface ItemProps {
  icon: IconType;
  iconColor: string;
  name: string;
}

interface SnippetProps {
  author: string;
  avatarUrl: string;
  profileUrl: string;
  url: string;
  createdAt: string;
  description: string;
  stargazerCount: number;
  fileText: string;
  languageName: 'TypeScript' | 'JavaScript';
  languageColor: string;
}
