import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreContext = createContext({});

export const ContextProvider = ({children}) => {
  const value = {};
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useAppStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useAppStore must be used within a ContextProvider');
  }
  return context;
};
