import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const Trips = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Trips</Text>

      <View style={styles.contentContainer}>
        <View style={styles.emptyStateContainer}>
          <Image
            source={require('../assets/icons/plane.png')} // Make sure to add this icon
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Trips;
