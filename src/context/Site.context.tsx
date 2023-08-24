import React, { useState } from 'react';
import { ContextProps } from '../@types/props';
import { SiteInterface } from '../@types/context';
import { Directories } from '../@types/about';

export const SiteContext = React.createContext<SiteInterface | null>(null);

export const SiteProvider: React.FC<ContextProps> = ({ children }) => {
  const [isUsingTerminal, setIsUsingTerminal] = useState(false);
  const [currentDirectory, setCurrentDirectory] =
    useState<Directories>('career');
  const [currentDisplayContent, setCurrentDisplayContent] =
    useState<string>('testing-data');

  return (
    <SiteContext.Provider
      value={{
        isUsingTerminal,
        currentDirectory,
        currentDisplayContent,
        setIsUsingTerminal,
        setCurrentDirectory,
        setCurrentDisplayContent
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
