import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import {Home, Map, Place, Trips, Settings} from './allScreens';

const Tab = createBottomTabNavigator();

const NavigationMenu = () => {
  return (
    <Tab.Navigator
      tabBar={props => (
        <TabBar
          {...props}
          activeRoute={props.state.routeNames[props.state.index]}
        />
      )}
      screenOptions={{
        animation: 'fade',

        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#001F1F',
          borderRadius: 25,
          position: 'absolute',
          bottom: 30,
          left: 20,
          right: 20,
          height: 90,
          paddingHorizontal: 15,
        },
        tabBarActiveTintColor: '#00AAB8',
        tabBarInactiveTintColor: '#fff',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Place" component={Place} />
      <Tab.Screen name="Trips" component={Trips} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default NavigationMenu;
