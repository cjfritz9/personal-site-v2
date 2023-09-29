import React, { useEffect, useState } from 'react';
import { ContextProps } from '../@types/props';
import { SiteInterface } from '../@types/context';
import { Directories } from '../@types/about';
import { useLocation, useNavigate } from 'react-router';

export const SiteContext = React.createContext<SiteInterface | null>(null);

export const SiteProvider: React.FC<ContextProps> = ({ children }) => {
  const [isUsingTerminal, setIsUsingTerminal] = useState(false);
  const [currentDirectory, setCurrentDirectory] =
    useState<Directories>('personal');
  const [currentDisplayContent, setCurrentDisplayContent] =
    useState<string>('testing-data');
  const [isSudoUser, setIsSudoUser] = useState<boolean>(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.pathname.includes('about')) {
      setCurrentDirectory('career')
    }
  }, [location.pathname])

  return (
    <SiteContext.Provider
      value={{
        isUsingTerminal,
        currentDirectory,
        currentDisplayContent,
        isSudoUser,
        location,
        navigate,
        setIsUsingTerminal,
        setCurrentDirectory,
        setCurrentDisplayContent,
        setIsSudoUser
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
