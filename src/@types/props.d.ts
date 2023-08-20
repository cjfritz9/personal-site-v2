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
  dailyGuess: string | undefined;
  dailyMap: StyleMap | undefined;
}

export interface ContextProps {
  children: React.ReactNode
}