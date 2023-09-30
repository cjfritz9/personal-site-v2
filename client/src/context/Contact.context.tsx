import React, { useEffect, useReducer, useState } from 'react';
import { ContextProps } from '../@types/props';
import { ContactInterface } from '../@types/context';
import { contactFormReducer } from '../utils/contact';

export const ContactContext = React.createContext<ContactInterface | null>(
  null
);

export const ContactProvider: React.FC<ContextProps> = ({ children }) => {
  const [formState, dispatchFormAction] = useReducer(contactFormReducer, {
    name: '',
    email: '',
    message: ''
  });

  return (
    <ContactContext.Provider
      value={{
        ...formState,
        dispatchFormAction
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};