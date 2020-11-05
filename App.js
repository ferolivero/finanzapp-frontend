import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/home/home.js';
import HeaderHome from './pages/home/components/headerHome';
import Movimiento from './pages/movimiento/movimiento.js';
import HeaderMovimiento from './pages/movimiento/components/headerMovimiento';
import Movimientos from './pages/movimientos/movimientos.js';
import HeaderMovimientos from './pages/movimientos/components/headerMovimientos';
import Informes from './pages/informes/informes.js';
import HeaderInformes from './pages/informes/components/headerInformes';
import Configuracion from './pages/configuracion/configuracion.js';
import HeaderConfiguracion from './pages/configuracion/components/headerConfiguracion';



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen options={{headerTitle: props => <HeaderHome />, headerLeft: null}} name="Home" component={Home} />
            <Stack.Screen options={{headerTitle: props => <HeaderMovimiento />, headerLeft: null}} name="Movimiento" component={Movimiento}/>
            <Stack.Screen options={{headerTitle: props => <HeaderMovimientos />, headerLeft: null}} name="Movimientos" component={Movimientos}/>
            <Stack.Screen options={{headerTitle: props => <HeaderInformes />, headerLeft: null}} name="Informes" component={Informes}/>
            <Stack.Screen options={{headerTitle: props => <HeaderConfiguracion />, headerLeft: null}} name="Configuración" component={Configuracion}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}