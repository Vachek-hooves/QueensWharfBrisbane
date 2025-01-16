import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLACES } from '../data/Places';

export const StoreContext = createContext({});

export const ContextProvider = ({children}) => {
  const [places, setPlaces] = useState([]);
  const [customPlaces, setCustomPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  // Initialize places data
  useEffect(() => {
    loadPlaces();
    loadCustomPlaces();
  }, []);

  // Load default places from AsyncStorage
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

  // Load custom places from AsyncStorage
  const loadCustomPlaces = async () => {
    try {
      const storedCustomPlaces = await AsyncStorage.getItem('customPlaces');
      if (storedCustomPlaces) {
        setCustomPlaces(JSON.parse(storedCustomPlaces));
      }
    } catch (error) {
      console.error('Error loading custom places:', error);
    }
  };

  // Save custom places to AsyncStorage
  const addPlace = async (newPlace) => {
    try {
      const updatedCustomPlaces = [...customPlaces, newPlace];
      await AsyncStorage.setItem('customPlaces', JSON.stringify(updatedCustomPlaces));
      setCustomPlaces(updatedCustomPlaces);
    } catch (error) {
      console.error('Error saving custom place:', error);
    }
  };

  const value = {
    places,
    customPlaces,
    isLoading,
    addPlace,
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
