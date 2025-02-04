import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AddTrip, Home, WellcomeAppScreen} from './allScreens';
import {ContextProvider} from './store/context';
import NavigationMenu from './NavigationMenu';
import PlaceCardDetails from './allScreens/PlaceCardDetails';
import CreatePlace from './allScreens/CreatePlace';
import CreatePlaceForm from './allScreens/CreatePlaceForm';
import PlaceDetails from './allScreens/PlaceDetails';
import AddTripForm from './allScreens/AddTripForm';
import TripDetails from './allScreens/TripDetails';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="NavigationMenu" component={NavigationMenu} />
          <Stack.Screen name="WelcomeAppScreen" component={WellcomeAppScreen} />
          <Stack.Screen name="PlaceCardDetails" component={PlaceCardDetails} />
          <Stack.Screen name="CreatePlace" component={CreatePlace} />
          <Stack.Screen name="CreatePlaceForm" component={CreatePlaceForm} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
          <Stack.Screen name="AddTrip" component={AddTrip} />
          <Stack.Screen name="AddTripForm" component={AddTripForm} />
          <Stack.Screen name="TripDetails" component={TripDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
export default App;
