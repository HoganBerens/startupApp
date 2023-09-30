import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './screens/Landing/Landing';
import {createRef} from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = createRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="landing" component={Landing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
