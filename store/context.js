import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLACES } from '../data/Places';

export const StoreContext = createContext({});

export const ContextProvider = ({children}) => {
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  // Initialize places data
  useEffect(() => {
    loadPlaces();
  }, []);

  // Load places from AsyncStorage
  const loadPlaces = async () => {
    try {
      const storedPlaces = await AsyncStorage.getItem('places');
      if (storedPlaces) {
        setPlaces(JSON.parse(storedPlaces));
      } else {
        // If no stored data, use default PLACES and save to AsyncStorage
        await AsyncStorage.setItem('places', JSON.stringify(PLACES));
        setPlaces(PLACES);
      }
    } catch (error) {
      console.error('Error loading places:', error);
      setPlaces(PLACES); // Fallback to default data if error
    } finally {
      setIsLoading(false);
    }
  };

  // Save places to AsyncStorage
  const savePlaces = async (updatedPlaces) => {
    try {
      await AsyncStorage.setItem('places', JSON.stringify(updatedPlaces));
      setPlaces(updatedPlaces);
    } catch (error) {
      console.error('Error saving places:', error);
    }
  };

  const value = {
    places,
    isLoading,
    savePlaces,
  };

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
