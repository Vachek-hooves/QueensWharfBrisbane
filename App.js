import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {WellcomeAppScreen} from './allScreens';
import {ContextProvider} from './store/context';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="WelcomeAppScreen" component={WellcomeAppScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}
export default App;
