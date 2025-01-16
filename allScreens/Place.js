import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useAppStore} from '../store/context';

const Place = ({navigation}) => {
  const {places} = useAppStore();
  const [selectedType, setSelectedType] = useState('Entertainment');

  // Extract unique categories
  const types = [...new Set(places.map(place => place.category))];

  // Filter places by selected type
  const filteredPlaces = places.filter(place => place.category === selectedType);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.headerTitle}>Place</Text>

      {/* Types ScrollView */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.typesContainer}
      >
        {types.map((type) => (
          <TouchableOpacity
            key={type}
            style={[
              styles.typeButton,
              selectedType === type && styles.selectedTypeButton,
            ]}
            onPress={() => setSelectedType(type)}
          >
            <Text style={[
              styles.typeText,
              selectedType === type && styles.selectedTypeText,
            ]}>
              {type}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Places List */}
      <ScrollView style={styles.placesContainer}>
        {filteredPlaces.map((place) => (
          <TouchableOpacity
            key={place.id}
            style={styles.placeCard}
            onPress={() => navigation.navigate('PlaceCardDetails', { placeId: place.id })}
          >
            <Image
              source={{ uri: place.image }}
              style={styles.placeImage}
            />
            <View style={styles.placeInfo}>
              <Text style={styles.placeName}>{place.name}</Text>
              <Text style={styles.placeDescription} numberOfLines={2}>
                {place.description}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Add Place Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddPlace')}
      >
        <Text style={styles.addButtonText}>Add Place</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 60,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  typesContainer: {
    maxHeight: 50,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  typeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#00181C',
  },
  selectedTypeButton: {
    backgroundColor: '#00181C',
  },
  typeText: {
    color: '#666666',
    fontSize: 16,
  },
  selectedTypeText: {
    color: '#FFFFFF',
  },
  placesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#00181C',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  placeImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  placeInfo: {
    flex: 1,
    marginLeft: 15,
  },
  placeName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  placeDescription: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: '#00AAB8',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    bottom:'15%'
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
