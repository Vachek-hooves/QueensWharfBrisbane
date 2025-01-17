import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';
import {useAppStore} from '../store/context';
import {useNavigation} from '@react-navigation/native';
import {mainLocation} from '../data/location';

const Map = () => {
  const {places} = useAppStore();
  const navigation = useNavigation();

  const handleMarkerPress = placeId => {
    navigation.navigate('PlaceCardDetails', {placeId});
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={mainLocation}>
        {places.map(place => (
          <Marker
            key={place.id}
            coordinate={{
              latitude: place.location.latitude,
              longitude: place.location.longitude,
            }}
            title={place.name}
            description={place.place}
            onPress={() => handleMarkerPress(place.id)}>
            <View style={styles.markerContainer}>
              <Image
                source={{uri: place.image}}
                style={styles.markerImage}
                resizeMode="cover"
              />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  markerContainer: {
    backgroundColor: '#001F1F',
    borderRadius: 20,
    padding: 2,
    borderWidth: 2,
    borderColor: '#00AAB8',
  },
  markerImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
  },
});
