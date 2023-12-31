import React, { SetStateAction } from 'react';
import { Pages, StyleMap } from './context';
import { GameBoard } from '../models/Codle';
import { IconType } from 'react-icons';
import { Directories } from './about';
import { FilterItem } from '../components/Pages/Projects/data/techItems';
import { ProjectItem } from '../components/Pages/Projects/data/projectItems';
import { contactItems, linksItems } from '../components/Pages/About/data/items';
import { ContactFormData } from '../lib/contact';
import { Technologies } from './projects';

export interface TabProps {
  activeTab: Pages;
}

export interface PanelProps {
  content: any;
  variant: 'left' | 'right' | 'center' | 'mobile';
  clickHandler?: () => void;
  width?: string;
  styles?: any;
}

export interface CodleProps {
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
export type TerminalModes = 'auto-complete' | 'cd' | 'sudo';

export interface AutoCompletionResult {
  type: string;
  description: string;
}

export interface CDResult {
  dirname: string;
  handle: string;
}

export interface SuggestionsProps {
  mode: TerminalModes;
  autoCompleteResults?: AutoCompletionResult[];
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
  link?: string;
}

interface SnippetProps {
  author: string;
  avatarUrl: string;
  profileUrl: string;
  url: string;
  createdAt: string;
  descriptionText: string;
  stargazerCount: number;
  snippetText: string;
  languageName: 'TypeScript' | 'JavaScript';
  languageColor: string;
}

interface FilterItemProps {
  item: FilterItem;
}

interface ProjectItemProps {
  showCard: boolean;
  projectNum: number;
  project: ProjectItem;
}

interface TechBadgeProps {
  name: Technologies[0];
}

export interface ContactsSectionProps {
  title: string;
  listItems: typeof linksItems;
}
