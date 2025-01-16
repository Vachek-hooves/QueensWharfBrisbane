import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MainLayout = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default MainLayout;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#000000'},
});
