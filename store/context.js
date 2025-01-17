import React, {createContext, useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLACES } from '../data/Places';

export const StoreContext = createContext({});

export const ContextProvider = ({children}) => {
  const [places, setPlaces] = useState([]);
  const [customPlaces, setCustomPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    image: null,
  });
  

  // Initialize places data
  useEffect(() => {
    loadPlaces();
    loadCustomPlaces();
    const loadData = async () => {
      try {
        // Load trips
        const savedTrips = await AsyncStorage.getItem('trips');
        if (savedTrips) {
          setTrips(JSON.parse(savedTrips));
        }
        // Load user data
        const savedUserData = await AsyncStorage.getItem('userData');
        if (savedUserData) {
          setUserData(JSON.parse(savedUserData));
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };
    loadData();
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

  // Add this function to save trips
  const saveTrip = async (newTrip) => {
    try {
      const updatedTrips = [...trips, newTrip];
      await AsyncStorage.setItem('trips', JSON.stringify(updatedTrips));
      setTrips(updatedTrips);
      return true;
    } catch (error) {
      console.error('Error saving trip:', error);
      return false;
    }
  };

  // Add deleteTrip function to AppProvider
  const deleteTrip = async (tripId) => {
    try {
      const updatedTrips = trips.filter(trip => trip.id !== tripId);
      await AsyncStorage.setItem('trips', JSON.stringify(updatedTrips));
      setTrips(updatedTrips);
      return true;
    } catch (error) {
      console.error('Error deleting trip:', error);
      return false;
    }
  };

  const deleteCustomPlace = async (placeId) => {
    try {
      const updatedCustomPlaces = customPlaces.filter(place => place.id !== placeId);
      await AsyncStorage.setItem('customPlaces', JSON.stringify(updatedCustomPlaces));
      setCustomPlaces(updatedCustomPlaces);
      return true;
    } catch (error) {
      console.error('Error deleting custom place:', error);
      return false;
    }
  };

  const updateUserProfile = async (newUserData) => {
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
      setUserData(newUserData);
      return true;
    } catch (error) {
      console.error('Error saving user data:', error);
      return false;
    }
  };

  const value = {
    places,
    customPlaces,
    isLoading,
    addPlace,
    trips,
    saveTrip,
    deleteTrip,
    deleteCustomPlace,
    userData,
    updateUserProfile,
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
