import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PlaceCard = ({title, description, image, id}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('PlaceCardDetails', { placeId: id })}>
      <Image 
        source={{uri: image}} 
        style={styles.image} 
        resizeMode="cover" 
      />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#001F1F',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: '50%',
  },
  content: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    color: '#666666',
    fontSize: 14,
    lineHeight: 20,
  },
});
