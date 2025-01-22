import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {useAppStore} from '../store/context';
import LayouImage from '../components/latout/LayouImage';

const PlaceDetails = ({route, navigation}) => {
  const {place} = route.params;
  const {deleteCustomPlace} = useAppStore();

  const handleDelete = () => {
    Alert.alert('Delete Place', 'Are you sure you want to delete this place?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          const success = await deleteCustomPlace(place.id);
          if (success) {
            navigation.goBack();
          } else {
            Alert.alert('Error', 'Failed to delete place');
          }
        },
      },
    ]);
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
          <Text style={styles.headerTitle} numberOfLines={1}>
            {place.name}
          </Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image source={{uri: place.image}} style={styles.placeImage} />
          </View>
          {/* Image */}
          <View style={styles.content}>
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

              {/* Delete Button */}
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDelete}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </LayouImage>
  );
};

const styles = StyleSheet.create({
  scrollView: {
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
    backgroundColor: '#001F1F',
    borderRadius: 20,
    padding: 20,
    paddingTop: 120, // Extra padding to account for image overlap
  },
  imageContainer: {
    alignItems: 'center',
    zIndex: 2,
    marginBottom: -100,
  },
  placeImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  categoryContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#00AAB8',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 26,
    marginLeft: 20,
    marginBottom: 20,
  },
  categoryText: {
    // color: '#FFFFFF',
    fontSize: 18,
  },
  detailsContainer: {
    paddingHorizontal: 10,
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
    fontWeight: 'bold',
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
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PlaceDetails;
