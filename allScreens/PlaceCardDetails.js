import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useAppStore} from '../store/context';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import SmallMap from '../components/homeComponents/SmallMap';
import {mainLocation} from '../data/location';
import LayouImage from '../components/latout/LayouImage';

const PlaceCardDetails = ({route, navigation}) => {
  const {places} = useAppStore();
  const placeId = route.params?.placeId;
  const place = places.find(p => p.id === placeId);

  if (!place) {
    return null;
  }

  return (
    <LayouImage>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Image
              source={require('../assets/icons/back.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {place.name}
          </Text>
        </View>

        <ScrollView style={styles.scrollView}>
          {/* Main Image */}

          <View style={styles.imageContainer}>
            <Image
              source={{uri: place.image}}
              style={styles.mainImage}
              resizeMode="cover"
            />
          </View>

          {/* Content */}
          <View style={styles.content}>
            {/* Title and Location */}
            <Text style={styles.title}>{place.name}</Text>
            <Text style={styles.subtitle}>{place.place}</Text>

            {/* Description Quote */}
            <Text style={styles.quote}>«{place.description}»</Text>

            {/* Category and Opening Hours */}
            <View style={styles.infoSection}>
              {place.category && (
                <Text style={styles.infoText}>
                  <Text style={styles.infoLabel}>Category: </Text>
                  {place.category}
                </Text>
              )}

              {place.openingHours && (
                <Text style={styles.infoText}>
                  <Text style={styles.infoLabel}>Opening Hours: </Text>
                  {place.openingHours}
                </Text>
              )}
            </View>

            {/* Popular Features */}
            {place.popularFor && place.popularFor.length > 0 && (
              <View style={styles.popularSection}>
                <Text style={styles.infoLabel}>Popular For:</Text>
                {place.popularFor.map((item, index) => (
                  <Text key={index} style={styles.popularItem}>
                    • {item}
                  </Text>
                ))}
              </View>
            )}

            {/* Location Section with Map */}
            <View style={styles.locationSection}>
              <Text style={styles.infoLabel}>Location:</Text>
              <Text style={styles.locationText}>
                Latitude: {place.location.latitude}
              </Text>
              <Text style={styles.locationText}>
                Longitude: {place.location.longitude}
              </Text>

              <SmallMap
                latitude={place.location.latitude}
                longitude={place.location.longitude}
                title={place.name}
                description={place.place}
              />

              {/* Map View */}
            </View>
          </View>
        </ScrollView>
      </View>
    </LayouImage>
  );
};

export default PlaceCardDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    color: '#00AAB8',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  contentWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  imageContainer: {
    alignItems: 'center',
    zIndex: 2,
    marginBottom: -100, // Half of the image height to create overlap
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  content: {
    backgroundColor: '#001F1F',
    borderRadius: 20,
    padding: 20,
    paddingTop: 120, // Extra padding to account for image overlap
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: '#666666',
    fontSize: 18,
    marginBottom: 20,
  },
  quote: {
    color: '#00AAB8',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  infoSection: {
    marginBottom: 20,
  },
  infoLabel: {
    color: '#00AAB8',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoText: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  popularSection: {
    marginBottom: 20,
  },
  popularItem: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    marginBottom: 4,
  },
  locationSection: {
    marginTop: 10,
  },
  locationText: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 16,
    marginBottom: 4,
  },
  description: {
    color: '#666666',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
