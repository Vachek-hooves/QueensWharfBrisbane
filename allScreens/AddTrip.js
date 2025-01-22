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

const AddTrip = ({navigation}) => {
  const [selectedType, setSelectedType] = useState(null);

  const tripTypes = ['Vacation', 'Business', 'Weekend', 'Adventure'];

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
          <Text style={styles.headerTitle}>Add Trip</Text>
        </View>

        <ScrollView
          contentContainerStyle={{borderRadius: 20}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            {/* Plane Icon */}
            <Image
              source={require('../assets/icons/plane.png')}
              style={styles.planeIcon}
            />

            {/* Trip Type Selection */}
            <Text style={styles.sectionTitle}>Type of trip</Text>
            <View style={styles.typeContainer}>
              {tripTypes.map(type => (
                <TouchableOpacity
                  key={type}
                  style={[
                    styles.typeButton,
                    selectedType === type && styles.selectedTypeButton,
                  ]}
                  onPress={() => setSelectedType(type)}>
                  <Text
                    style={[
                      styles.typeText,
                      selectedType === type && styles.selectedTypeText,
                    ]}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={{height: 29}} />
        {/* Next Button */}
        <TouchableOpacity
          style={[
            styles.nextButton,
            selectedType ? styles.nextButtonActive : styles.nextButtonDisabled,
          ]}
          disabled={!selectedType}
          onPress={() => {
            if (selectedType) {
              navigation.navigate('AddTripForm', {tripType: selectedType});
            }
          }}>
          <Text style={styles.nextButtonText}>Next</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    marginBottom: 20,
  },
  backButton: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 12,
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: '#00AAB8',
  },
  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40, // To center the title accounting for back button
  },
  content: {
    // flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#00181C',
    borderRadius: 20,
  },
  planeIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 30,
  },
  sectionTitle: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 20,
  },
  typeContainer: {
    backgroundColor: '#00181C',
    borderRadius: 20,
    padding: 20,
  },
  typeButton: {
    backgroundColor: '#00353C',
    borderRadius: 25,
    padding: 15,
    marginBottom: 10,
  },
  selectedTypeButton: {
    // backgroundColor: '#00AAB8',
    borderWidth: 4,
    borderColor: '#00AAB8',
  },
  typeText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
  selectedTypeText: {
    fontWeight: 'bold',
  },
  nextButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 50,
    width: '90%',
  },
  nextButtonActive: {
    backgroundColor: '#00AAB8',
  },
  nextButtonDisabled: {
    backgroundColor: '#666666',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTrip;
