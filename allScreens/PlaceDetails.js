import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const PlaceDetails = ({route, navigation}) => {
  const {place} = route.params;

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
        <Text style={styles.headerTitle} numberOfLines={1}>
          {place.name}
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image source={{uri: place.image}} style={styles.placeImage} />
        </View>

        {/* Category Badge */}
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{place.category}</Text>
        </View>

        {/* Details */}
        <View style={styles.detailsContainer}>
          {/* Place Name */}
          <Text style={styles.label}>Place Name</Text>
          <Text style={styles.value}>{place.name}</Text>

          {/* Location */}
          <Text style={styles.label}>Location</Text>
          <Text style={styles.value}>{place.location}</Text>

          {/* Description */}
          <Text style={styles.label}>Description</Text>
          <Text style={styles.value}>{place.description}</Text>

          {/* Working Hours */}
          <Text style={styles.label}>Working hours</Text>
          <Text style={styles.value}>{place.workingHours}</Text>

          {/* Conveniences */}
          <Text style={styles.label}>Conveniences</Text>
          <View style={styles.conveniencesContainer}>
            {place.conveniences.map((item, index) => (
              <View key={index} style={styles.convenienceItem}>
                <Text style={styles.convenienceText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

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
    width: 30,
    height: 30,
    tintColor: '#00AAB8',
  },
  headerTitle: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#00181C',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
   
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,

  },
  placeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#00353C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoryText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    
  },
  label: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 8,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
  },
  conveniencesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  convenienceItem: {
    backgroundColor: '#333333',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  convenienceText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default PlaceDetails;
