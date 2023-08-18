import React from "react";
import { StyleMap } from "./context";

export interface PanelProps {
  content: any;
  variant: 'left' | 'right';
  width?: string;
}

export interface BoltProps {
  variant: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface CodleInputRowProps {
  isActive: boolean;
  setActiveRow: React.Dispatch<React.SetStateAction<number>>;
  dailyGuess: string | undefined;
  dailyMap: StyleMap | undefined;
}

export interface ContextProps {
  children: React.ReactNode
}