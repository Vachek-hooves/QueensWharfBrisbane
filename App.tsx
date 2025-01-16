import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WellcomeAppScreen} from './allScreens';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeAppScreen" component={WellcomeAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
