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

const AddPlace = ({navigation}) => {
  const {places} = useAppStore();
  const [selectedType, setSelectedType] = useState(null);

  // Extract unique categories from places
  const types = [...new Set(places.map(place => place.category))];

  // // Icons mapping for categories
  // const categoryIcons = {
  //   'Entertainment': require('../assets/icons/entertainment.png'),
  //   'Restaurants': require('../assets/icons/restaurant.png'),
  //   'Walking': require('../assets/icons/walking.png'),
  //   'Sightseeing': require('../assets/icons/sightseeing.png'),
  // };

  const handleNext = () => {
    if (selectedType) {
      navigation.navigate('AddPlaceDetails', {category: selectedType});
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image
            source={require('../assets/icons/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Place</Text>
      </View>

      {/* Type Selection */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Type</Text>

        <ScrollView
          style={styles.typeContainer}
          showsVerticalScrollIndicator={false}>
          {types.map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.typeButton,
                {backgroundColor: '#00353C'},
                selectedType === type && styles.selectedType,
              ]}
              onPress={() => setSelectedType(type)}>
              <Image
                // source={categoryIcons[type]}
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
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, !selectedType && styles.nextButtonDisabled]}
        onPress={handleNext}
        disabled={!selectedType}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddPlace;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00181C',
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
    width: 30,
    height: 30,
    tintColor: '#00AAB8',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: '#00181C',
    borderRadius: 18,
    marginHorizontal: 10,
  },
  sectionTitle: {
    color: '#666666',
    fontSize: 18,
    marginBottom: 20,
  },
  typeContainer: {
    // backgroundColor: '#00353C',
    borderRadius: 20,
    padding: 10,
    maxHeight: '80%',
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 15,
    marginBottom: 8,
    // borderWidth: 4,
    backgroundColor: '#00353C',
  },
  selectedType: {
    backgroundColor: '#00353C',
    borderWidth: 4,
    borderColor: '#00AAB8',
  },
  typeIcon: {
    width: 24,
    height: 24,
    marginRight: 15,
    tintColor: '#666666',
  },
  selectedTypeIcon: {
    tintColor: '#FFFFFF',
  },
  typeText: {
    color: '#FFFFFF',
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
    bottom: 40,
    left: 0,
    right: 0,
  },
  nextButtonDisabled: {
    backgroundColor: '#004444',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
