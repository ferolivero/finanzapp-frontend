import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/home/home.js'
import Agregar from './pages/movimiento/agregar.js'
import Editar from './pages/movimiento/editar.js'
import Movimientos from './pages/movimientos/movimientos.js'
import Informes from './pages/informes/informes.js'
import Configuracion from './pages/configuracion/configuracion.js'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { deleteData, getData, storeData } from './components/StorageComponent'
import { Text } from 'react-native'
import LoginScreen from './pages/Login/Login.js'
import GlobalContext from './components/global/context'

const tokenStorageKey = '@app_token'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState()

  const authenticateUser = (token) => {
    console.log('Login exitoso', token)
    storeData(tokenStorageKey, token)
    checkToken()
  }

  const checkToken = async () => {
    const token = await getData(tokenStorageKey)
    if (token != undefined) {
      setAuthenticated(true)
      setToken(tokenStorageKey)
    }
  }

  const logout = () => {
    console.log('Logout')
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

          <LoginScreen onLoginSuccess={authenticateUser}></LoginScreen>
        </>
      ) : (
        <GlobalContext.Provider
          value={{
            token: getData(tokenStorageKey),
          }}
        >
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarButton: ['Editar'].includes(route.name)
                  ? () => {
                      return null
                    }
                  : undefined,
              })}
              tabBarOptions={{
                keyboardHidesTabBar: true,
              }}
            >
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Movs" component={Movimientos} />
              <Tab.Screen name="Editar" component={Editar} />
              <Tab.Screen name="Agregar" component={Agregar} />
              <Tab.Screen name="Informes" component={Informes} />
              <Tab.Screen
                name="Config"
                children={() => (
                  <Configuracion onLogout={logout}></Configuracion>
                )}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GlobalContext.Provider>
      )}
    </>
  )
}
