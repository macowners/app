
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import Routers from './pages/login_ok/Router';


export default function App() {
  const Stack = createStackNavigator();

  return (

      <NavigationContainer >
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Routers" component={Routers} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

