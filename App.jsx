import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Landing from './screens/Landing/Landing';
import {createRef} from 'react';
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = createRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
