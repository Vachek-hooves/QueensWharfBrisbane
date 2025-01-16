export const WEATHER_API_KEY = '6cdb0b56e864750441f97faddb383715';

export const getWeather = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`,
  );
  const data = await response.json();
  return data;
};
