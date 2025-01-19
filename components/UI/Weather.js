import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {mainLocation} from '../../data/location';

const WEATHER_API = '4df518bd7ae93818af84dce795c9b7ac';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=`;

const Weather = () => {
  const lat = mainLocation.latitude;
  const lon = mainLocation.longitude;
  console.log(lat, lon);

  const [weatherData, setWeatherData] = useState(null);

  console.log(weatherData, 'weatherData');

  useEffect(() => {
    fetchWeather(lat, lon);
  }, []);

  const fetchWeather = async (lat, lon) => {
    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    try {
      const weatherResponse =
        // await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API}
        await fetch(
          `https://Historical-Weather-API2.proxy-production.allthingsdev.co/v1/archive?latitude=52.52&longitude=13.41&elevation=1603&start_date=2024-07-09&end_date=2024-07-23&hourly=temperature_2m&tilt=0&azimuth=0&models=best_match&daily=weather_code&temperature_unit=celsius&wind_speed_unit=kmh&precipitation_unit=mm&timeformat=iso8601&timezone=auto&cell_selection=land`,
          requestOptions,
        );

      const data = await weatherResponse.json();
      console.log(data, 'data');
      if ((data.cod = 200)) {
        setWeatherData(data);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Weather fetch error:', error);
      Alert.alert('Error', 'Failed to fetch weather data');
    }
  };

  return (
    <View>
      <Text>Weather</Text>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({});
