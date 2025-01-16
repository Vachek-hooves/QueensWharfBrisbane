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

const Place = ({navigation}) => {
  const {places, customPlaces} = useAppStore();
  const [selectedType, setSelectedType] = useState('Entertainment');
  console.log(customPlaces);

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

  return (
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

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    color: '#00AAB8',
    fontSize: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
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
    paddingVertical: 15,
    marginRight: 10,
    borderRadius: 15,
    backgroundColor: '#00353C',
    minWidth: 150,
  },
  selectedTypeButton: {
    backgroundColor: '#00353C',
    borderWidth: 4,
    borderColor: '#00AAB8',
  },
  typeIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#666666',
  },
  selectedTypeIcon: {
    tintColor: '#FFFFFF',
  },
  typeText: {
    color: '#666666',
    fontSize: 16,
  },
  selectedTypeText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#00AAB8',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 25,
    position: 'absolute',
    bottom: 140,
    left: 0,
    right: 0,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
