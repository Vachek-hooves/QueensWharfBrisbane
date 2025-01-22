import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useAppStore} from '../store/context';
import LayouImage from '../components/latout/LayouImage';

const Trips = ({navigation}) => {
  const {trips} = useAppStore();

  const renderTrip = ({item}) => (
    <TouchableOpacity
      style={styles.tripCard}
      onPress={() => navigation.navigate('TripDetails', {trip: item})}>
      <Image
        source={
          item.image ? {uri: item.image} : require('../assets/icons/plane.png')
        }
        style={styles.tripImage}
      />
      <View style={styles.tripInfo}>
        <Text style={styles.tripName}>{item.name}</Text>
        <View style={styles.tripDetails}>
          <View style={styles.locationContainer}>
            <Image
              source={require('../assets/icons/location.png')}
              style={styles.icon}
            />
            <Text style={styles.tripPlace}>{item.place}</Text>
          </View>
          <View style={styles.timeContainer}>
            <View style={styles.dateContainer}>
              <Image
                source={require('../assets/icons/calendar.png')}
                style={styles.icon}
              />
              <Text style={styles.tripDate}>{item.date}</Text>
            </View>
            <View style={styles.timeWrapper}>
              <Image
                source={require('../assets/icons/clock.png')}
                style={styles.icon}
              />
              <Text style={styles.tripTime}>{item.time}</Text>
            </View>
          </View>
        </View>
        <View style={styles.typeBadge}>
          <Text style={styles.typeBadgeText}>{item.type}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LayouImage>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Trips</Text>

        {trips.length === 0 ? (
          <View style={styles.contentContainer}>
            <View style={styles.emptyStateContainer}>
              <Image
                source={require('../assets/icons/plane.png')}
                style={styles.emptyStateIcon}
              />
              <Text style={styles.emptyStateTitle}>Nothing added yet</Text>
              <Text style={styles.emptyStateSubtitle}>
                Click on the button below to add the first ride
              </Text>

              <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddTrip')}>
                <Text style={styles.addButtonText}>Add Trip</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <FlatList
              data={trips}
              renderItem={renderTrip}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.tripsList}
            />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('AddTrip')}>
              <Text style={styles.addButtonText}>Add Trip</Text>
            </TouchableOpacity>
          </View>
        )}
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
  contentContainer: {
    // flex: 1,
    margin: 20,
    backgroundColor: '#00181C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateIcon: {
    width: 150,
    height: 150,
    marginBottom: 20,
    // tintColor: '#666666',
  },
  emptyStateTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  emptyStateSubtitle: {
    color: '#666666',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#00AAB8',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    minWidth: '90%',
    marginHorizontal: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tripsList: {
    padding: 20,
  },
  tripCard: {
    backgroundColor: '#00181C',
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  tripImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  tripInfo: {
    flex: 1,
  },
  tripName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tripDetails: {
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  timeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    tintColor: '#00AAB8',
    marginRight: 5,
  },
  tripPlace: {
    color: '#666666',
    fontSize: 14,
  },
  tripDate: {
    color: '#666666',
    fontSize: 14,
  },
  tripTime: {
    color: '#666666',
    fontSize: 14,
  },
  typeBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#00353C',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
  },
  typeBadgeText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

export default Trips;
