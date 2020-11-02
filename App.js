import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/home.js';
import HeaderHome from './pages/home/components/headerHome';
import Agregar from './pages/agregar/agregar.js';
import HeaderAgregar from './pages/agregar/components/headerAgregar';
import Movimientos from './pages/movimientos/movimientos.js';
import HeaderMovimientos from './pages/movimientos/components/headerMovimientos';



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerTitle: props => <HeaderHome />, headerLeft: null}} name="Home" component={Home} />
            <Stack.Screen options={{headerTitle: props => <HeaderAgregar />, headerLeft: null}} name="Agregar" component={Agregar}/>
            <Stack.Screen options={{headerTitle: props => <HeaderMovimientos />, headerLeft: null}} name="Movimientos" component={Movimientos}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}