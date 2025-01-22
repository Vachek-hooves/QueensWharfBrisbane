import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useAppStore} from '../store/context';
import MainLayout from '../components/latout/MainLayout';
import PlaceCard from '../components/homeComponents/PlaceCard';
import Weather from '../components/UI/Weather';
import LayouImage from '../components/latout/LayouImage';
const Home = () => {
  const {places} = useAppStore();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    // <MainLayout>
      <LayouImage>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Home</Text>

          {/* Time and Weather Section */}
          <View style={styles.timeWeatherContainer}>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>
                {currentTime.getHours().toString().padStart(2, '0')}
              </Text>
              {/* <Text style={styles.ampm}>
              {currentTime.getHours() >= 12 ? 'PM' : 'AM'}
            </Text> */}
            </View>
            <View style={styles.timeBox}>
              <Text style={styles.timeText}>
                {currentTime.getMinutes().toString().padStart(2, '0')}
              </Text>
            </View>
            {/* <Weather /> */}
            <View style={styles.weatherBox}>
              <Text style={styles.temperature}>27°</Text>
              <View>
                <Text style={styles.city}>Brisbane</Text>
                <Text style={styles.country}>Australia</Text>
              </View>
            </View>
          </View>

          {/* People Section */}
          {/* <TouchableOpacity style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>People</Text>
          <Text style={styles.sectionArrow}>›</Text>
        </TouchableOpacity> */}

          {/* News Section */}
          <View style={styles.newsSection}>
            {/* <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>News</Text>
            <Text style={styles.sectionLink}>All ›</Text>
          </View> */}
          </View>

          {places.map(place => (
            <PlaceCard
              key={place.id}
              title={place.name}
              description={place.description}
              image={place.image}
              id={place.id}
            />
          ))}
        </ScrollView>
        <View style={{height: 130}} />
      </LayouImage>
    // </MainLayout> 
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  timeWeatherContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  timeBox: {
    backgroundColor: '#001F1F',
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 40,
    color: '#00FFFF',
    fontWeight: 'bold',
  },
  ampm: {
    color: '#fff',
    marginTop: 5,
  },
  weatherBox: {
    backgroundColor: '#001F1F',
    borderRadius: 12,
    padding: 15,
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
  },
  temperature: {
    fontSize: 40,
    color: '#00FFFF',
    fontWeight: 'bold',
    marginRight: 10,
  },
  city: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  country: {
    color: '#666',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  sectionArrow: {
    color: '#666',
    fontSize: 20,
  },
  sectionLink: {
    color: '#666',
    fontSize: 16,
  },
  newsCard: {
    backgroundColor: '#001F1F',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  newsImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  newsContent: {
    flex: 1,
    padding: 10,
  },
  newsTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newsDescription: {
    color: '#666',
    fontSize: 14,
  },
  tabBarSpacing: {
    height: 100, // Adjust this value based on your TabBar height
  },
});
