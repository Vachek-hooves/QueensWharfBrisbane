import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useAppStore} from '../store/context';
import LayouImage from '../components/latout/LayouImage';

const Place = ({navigation}) => {
  const {customPlaces} = useAppStore();
  const [selectedType, setSelectedType] = useState('Entertainment');

  // Define fixed categories
  const types = ['Entertainment', 'Restaurants', 'Walking', 'Attractions'];

  // Icons mapping (you'll need to add these icons to your assets)
  const categoryIcons = {
    Entertainment: require('../assets/icons/entertainment.png'),
    Restaurants: require('../assets/icons/restaurant.png'),
    Walking: require('../assets/icons/walking.png'),
    Attractions: require('../assets/icons/attractions.png'),
  };

  const handleNext = () => {
    if (selectedType) {
      navigation.navigate('CreatePlace', {category: selectedType});
    }
  };

  const filteredPlaces = customPlaces.filter(
    place => place.category === selectedType,
  );

  return (
    <LayouImage>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}>
            <Text style={styles.backIcon}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Place</Text>
        </View>

        {/* Types ScrollView */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.typesContainer}>
          {types.map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                selectedType === type && styles.selectedTypeButton,
              ]}
              onPress={() => setSelectedType(type)}>
              <Image
                source={categoryIcons[type]}
                style={[
                  styles.typeIcon,
                  selectedType === type && styles.selectedTypeIcon,
                ]}
              />
              <Text
                style={[
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
          {filteredPlaces.map(place => (
            <TouchableOpacity
              key={place.id}
              style={styles.placeCard}
              onPress={() => navigation.navigate('PlaceDetails', {place})}>
              <Image source={{uri: place.image}} style={styles.placeImage} />
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
          onPress={() => navigation.navigate('CreatePlace')}>
          <Text style={styles.addButtonText}>Add Place</Text>
        </TouchableOpacity>
      </View>
    </LayouImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  typesContainer: {
    maxHeight: 70,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#00181C',
    gap: 10,
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
    marginTop: 20,
  },
  placeCard: {
    flexDirection: 'row',
    backgroundColor: '#00181C',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
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
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Place;
