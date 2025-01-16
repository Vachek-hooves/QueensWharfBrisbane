import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';

const SmallMap = ({latitude, longitude, title, description}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          title={title}
          description={description}
        />
      </MapView>
    </View>
  );
};

export default SmallMap;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    borderRadius: 12,
    overflow: 'hidden',
    height: 200,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
