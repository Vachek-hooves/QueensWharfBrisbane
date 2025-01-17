import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {useAppStore} from '../store/context';

const TripDetails = ({route, navigation}) => {
  const {trip} = route.params;
  const {deleteTrip} = useAppStore();

  const handleDelete = () => {
    Alert.alert(
      'Delete Trip',
      'Are you sure you want to delete this trip?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            const success = await deleteTrip(trip.id);
            if (success) {
              navigation.goBack();
            } else {
              Alert.alert('Error', 'Failed to delete trip');
            }
          },
        },
      ],
    );
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
        <Text style={styles.headerTitle}>Journey to...</Text>
      </View>

      <View style={styles.content}>
        {/* Trip Image */}
        <View style={styles.imageContainer}>
          <Image
            source={trip.image ? {uri: trip.image} : require('../assets/icons/plane.png')}
            style={styles.tripImage}
          />
          {/* <TouchableOpacity style={styles.editButton}>
            <Image
              source={require('../assets/icons/edit.png')}
              style={styles.editIcon}
            />
          </TouchableOpacity> */}
        </View>

        {/* Trip Type Badge */}
        <View style={styles.typeBadge}>
          <Text style={styles.typeBadgeText}>{trip.type}</Text>
        </View>

        {/* Trip Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Name of the trip</Text>
          <Text style={styles.value}>{trip.name}</Text>

          <Text style={styles.label}>Place</Text>
          <Text style={styles.value}>{trip.place}</Text>

          <Text style={styles.label}>Budget</Text>
          <Text style={styles.value}>{trip.budget}$</Text>

          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{trip.date}</Text>

          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{trip.time}</Text>
        </View>

        {/* Delete Button */}
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 20,
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
    marginRight: 40,
  },
  content: {
    flex: 1,
    backgroundColor: '#00181C',
    margin: 20,
    borderRadius: 20,
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  tripImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  editButton: {
    position: 'absolute',
    right: 60,
    top: 20,
    backgroundColor: '#00AAB8',
    padding: 10,
    borderRadius: 20,
  },
  editIcon: {
    width: 20,
    height: 20,
    tintColor: '#FFFFFF',
  },
  typeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#00353C',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  typeBadgeText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#666666',
    fontSize: 16,
    marginBottom: 5,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 'auto',
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TripDetails;