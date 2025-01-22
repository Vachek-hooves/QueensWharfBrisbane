import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import LayouImage from '../components/latout/LayouImage';

const CreatePlace = ({route, navigation}) => {
  const [selectedType, setSelectedType] = useState(null);

  // Define fixed types with their icons
  const types = [
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: require('../assets/icons/entertainment.png'),
    },
    {
      id: 'restaurants',
      name: 'Restaurants',
      icon: require('../assets/icons/restaurant.png'),
    },
    {
      id: 'walking',
      name: 'Walking',
      icon: require('../assets/icons/walking.png'),
    },
    {
      id: 'attractions',
      name: 'Attractions',
      icon: require('../assets/icons/attractions.png'),
    },
  ];

  const handleNext = () => {
    if (selectedType) {
      navigation.navigate('CreatePlaceForm', {category: selectedType});
    }
  };

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
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Place</Text>
        </View>

        {/* Content */}
        <View style={styles.wrapper}>
          <View style={styles.content}>
            <Text style={styles.sectionTitle}>Type</Text>

            <ScrollView
              style={styles.typeContainer}
              showsVerticalScrollIndicator={false}>
              {types.map(type => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.typeButton,
                    selectedType === type.name && styles.selectedType,
                  ]}
                  onPress={() => setSelectedType(type.name)}>
                  <Image
                    source={type.icon}
                    style={[
                      styles.typeIcon,
                      selectedType === type.name && styles.selectedTypeIcon,
                      {tintColor: '#00AAB8'},
                    ]}
                  />
                  <Text
                    style={[
                      styles.typeText,
                      selectedType === type.name && styles.selectedTypeText,
                    ]}>
                    {type.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={[
            styles.nextButton,
            !selectedType && styles.nextButtonDisabled,
          ]}
          onPress={handleNext}
          disabled={!selectedType}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </LayouImage>
  );
};

export default CreatePlace;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 100,
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
    // flex: 1,
    padding: 20,
    backgroundColor: '#00181C',
    borderRadius: 18,
    marginHorizontal: 10,
    top: '15%',
  },
  sectionTitle: {
    color: '#666666',
    fontSize: 18,
    marginBottom: 20,
  },
  typeContainer: {
    borderRadius: 20,
    padding: 10,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 32,
    marginBottom: 8,
    backgroundColor: '#00353C',
  },
  selectedType: {
    backgroundColor: '#00353C',
    borderWidth: 4,
    borderColor: '#00AAB8',
  },
  typeIcon: {
    width: 34,
    height: 34,
    marginRight: 15,
    tintColor: '#666666',
  },
  selectedTypeIcon: {
    tintColor: '#FFFFFF',
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 20,
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
    bottom: 60,
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
