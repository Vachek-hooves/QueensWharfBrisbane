import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Home, WellcomeAppScreen} from './allScreens';
import {ContextProvider} from './store/context';
import NavigationMenu from './NavigationMenu';
import PlaceCardDetails from './allScreens/PlaceCardDetails';
import CreatePlace from './allScreens/CreatePlace';
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
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
export default App;
