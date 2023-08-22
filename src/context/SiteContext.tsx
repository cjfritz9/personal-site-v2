import React, { useState } from 'react';
import { ContextProps } from '../@types/props';
import { SiteInterface } from '../@types/context';

export const SiteContext = React.createContext<SiteInterface | null>(null);

export const SiteProvider: React.FC<ContextProps> = ({ children }) => {
  const [isUsingTerminal, setIsUsingTerminal] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        isUsingTerminal,
        setIsUsingTerminal
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
