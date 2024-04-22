import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const greeting = 'hello';

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Context is out of Provider');
  }

  return context;
};
