import {StyleSheet, Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from './allScreens';
const Tab = createBottomTabNavigator();
const NavigationMenu = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default NavigationMenu;

const styles = StyleSheet.create({});
