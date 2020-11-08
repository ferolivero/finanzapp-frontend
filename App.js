import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home/home.js';
import Agregar from './pages/movimiento/agregar.js';
import Editar from './pages/movimiento/editar.js';
import Movimientos from './pages/movimientos/movimientos.js';
import Informes from './pages/informes/informes.js';
import Configuracion from './pages/configuracion/configuracion.js';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text } from 'react-native';


import LoginScreen from './pages/Login/Login.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarButton: [
            "Editar",
          ].includes(route.name)
            ? () => {
              return null;
            }
            : undefined,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Movs" component={Movimientos} />
        <Tab.Screen name="Editar" component={Editar} />
        <Tab.Screen name="Agregar" component={Agregar} />
        <Tab.Screen name="Informes" component={Informes} />
        <Tab.Screen name="Config" component={Configuracion} />
      </Tab.Navigator>

    </NavigationContainer>
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home">
    //         <Stack.Screen options={{headerTitle: props => <HeaderHome />, headerLeft: null}} name="Home" component={Home} />
    //         <Stack.Screen options={{headerTitle: props => <HeaderMovimiento />, headerLeft: null}} name="Movimiento" component={Movimiento}/>
    //         <Stack.Screen options={{headerTitle: props => <HeaderMovimientos />, headerLeft: null}} name="Movimientos" component={Movimientos}/>
    //         <Stack.Screen options={{headerTitle: props => <HeaderInformes />, headerLeft: null}} name="Informes" component={Informes}/>
    //         <Stack.Screen options={{headerTitle: props => <HeaderConfiguracion />, headerLeft: null}} name="Configuración" component={Configuracion}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    }
    </>
  );
}