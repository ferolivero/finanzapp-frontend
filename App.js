import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/home.js';
import Agregar from './pages/agregar/agregar.js';


const Stack = createStackNavigator();

export default function App() {

  return (
    /**
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <LoginScreen></LoginScreen>
    </View>
    */
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
            <Stack.Screen options={{title:"Finanzapp"}} name="Home" component={Home}/>
            <Stack.Screen options={{title:"Finanzapp"}} name="Agregar" component={Agregar}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}