import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text } from 'react-native';
import Agregar from './pages/agregar/agregar.js';
import Home from './pages/home/home.js';
import LoginScreen from './pages/Login/Login.js';

const Stack = createStackNavigator();

export default function App() {

  const [logged, setLogged] = useState(false);

  const onLoginSuccess = (loggedUser) => { 
    console.log('Login Success', loggedUser);
    setLogged(true);
  }

  return (
    <>
    {
      (!logged) ? <>
          <StatusBar style="auto" />
          <Text>Por favor para continuar inicia sesion.</Text>
          <LoginScreen onLoginSuccess={onLoginSuccess}></LoginScreen>
        </>
    : 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <Stack.Screen options={{title:"Finanzapp"}} name="Home" component={Home}/>
            <Stack.Screen options={{title:"Finanzapp"}} name="Agregar" component={Agregar}/>
        </Stack.Navigator>
    </NavigationContainer>
    }
    </>
  );
}