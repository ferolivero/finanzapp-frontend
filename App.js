import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/home.js';
import Agregar from './pages/agregar/agregar.js';


const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{title:"Finanzapp"}} name="Home" component={Home}/>
            <Stack.Screen options={{title:"Finanzapp"}} name="Agregar" component={Agregar}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}