import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const LayouImage = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/bg/brisbane.png')}
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default LayouImage;

const styles = StyleSheet.create({});
