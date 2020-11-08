import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { deleteData, getData, storeData } from './components/StorageComponent'
import Agregar from './pages/agregar/agregar.js'
import Home from './pages/home/home.js'
import LoginScreen from './pages/Login/Login.js'

const tokenStorageKey = '@app_token'
const Stack = createStackNavigator()

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)

  const authenticateUser = (token) => {
    console.log('Login exitoso')
    storeData(tokenStorageKey, token)
    checkToken()
  }

  const checkToken = async () => {
    const token = await getData(tokenStorageKey)
    if (token != undefined) {
      setAuthenticated(true)
    }
  }

  const logout = () => {
    deleteData(tokenStorageKey)
    setAuthenticated(false)
  }

  const isAuthenticated = () => {
    return authenticated
  }

  useEffect(() => {
    checkToken()
  }, [])

  return (
    <>
      {!isAuthenticated() ? (
        <>
          <StatusBar style="auto" />
          <Text>Por favor para continuar inicia sesion.</Text>
          <LoginScreen onLoginSuccess={authenticateUser}></LoginScreen>
        </>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
          >
            <Stack.Screen
              options={{ title: 'Finanzapp' }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ title: 'Finanzapp' }}
              name="Agregar"
              component={Agregar}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  )
}
