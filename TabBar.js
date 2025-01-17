import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

const TabBar = ({navigation, activeRoute}) => {
  // console.log(activeRoute);
  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('./assets/icons/home.png')}
          style={[styles.navIcon, activeRoute === 'Home' && styles.activeNav]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Map')}>
        <Image
          source={require('./assets/icons/map.png')}
          style={[styles.navIcon, activeRoute === 'Map' && styles.activeNav]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Place')}>
        <Image
          source={require('./assets/icons/place.png')}
          style={[styles.navIcon, activeRoute === 'Place' && styles.activeNav]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Trips')}>
        <Image
          source={require('./assets/icons/trips.png')}
          style={[styles.navIcon, activeRoute === 'Trips' && styles.activeNav]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate('Settings')}>
        <Image
          source={require('./assets/icons/settings.png')}
          style={[
            styles.navIcon,
            activeRoute === 'Settings' && styles.activeNav,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#00353C',
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    height: 80,
  },
  navIcon: {
    width: 36,
    height: 36,
    tintColor: '#FFFFFF',
  },
  activeNav: {
    tintColor: '#00AAB8',
  },
});
