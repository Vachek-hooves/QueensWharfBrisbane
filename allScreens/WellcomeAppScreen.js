import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import LayouImage from '../components/latout/LayouImage';

const WelcomeAppScreen = ({navigation}) => {
  // Create animated values for each word
  const fadeAnim1 = new Animated.Value(0);
  const fadeAnim2 = new Animated.Value(0);
  const fadeAnim3 = new Animated.Value(0);

  useEffect(() => {
    // Sequence animation for each word
    Animated.sequence([
      Animated.timing(fadeAnim1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigate to main screen after animation completes
      setTimeout(() => {
        navigation.replace('NavigationMenu');
      }, 1000);
    });
  }, []);

  return (
    <LayouImage>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Animated.Text style={[styles.text, {opacity: fadeAnim1}]}>
            Queen Travel
          </Animated.Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim2}]}>
            to
          </Animated.Text>
          <Animated.Text style={[styles.text, {opacity: fadeAnim3}]}>
            Brisbane
          </Animated.Text>
        </View>
      </View>
    </LayouImage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#00AAB8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
  },
});

export default WelcomeAppScreen;
