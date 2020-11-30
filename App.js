import {
  faChartBar,
  faEdit,
  faHome,
  faListAlt,
  faPlusSquare,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import GlobalContext from './components/global/context'
import { deleteData, getData, storeData } from './components/StorageComponent'
import Configuracion from './pages/configuracion/configuracion.js'
import Home from './pages/home/home.js'
import Informes from './pages/informes/informes.js'
import LoginScreen from './pages/Login/Login.js'
import Agregar from './pages/movimiento/agregar.js'
import Editar from './pages/movimiento/editar.js'
import Movimientos from './pages/movimientos/movimientos.js'
import Categoria from './pages/categoria/agregar.js'
import EditarCat from './pages/categoria/editar.js'
import Tarjeta from './pages/tarjeta/agregar.js'
import EditarTar from './pages/tarjeta/editar.js'


const tokenStorageKey = '@app_token'
const configStorageKey = '@user_config'
const Tab = createBottomTabNavigator()

export default function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [token, setToken] = useState()
  const [config, setConfig] = useState()

  const authenticateUser = (token, userConfig) => {
    console.log('Login exitoso', token)
    setConfig(userConfig)
    storeData(configStorageKey, userConfig)
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
    deleteData(configStorageKey)
    setAuthenticated(false)
  }

  const handleChangeConfig = (config) => {
    console.log('handleConfig', { config })
    setConfig(config)
    storeData(configStorageKey, config)
  }

  const getConfig = async () => {
    if (config) {
      console.log('Config from State')
      return config
    }
    console.log('Config from Storage')
    let configStored = await getData(configStorageKey)
    console.log({ configStored })
    setConfig(configStored)
  }

  const isAuthenticated = () => {
    return authenticated
  }

  useEffect(() => {
    checkToken()
    getConfig()
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
            config: config,
          }}
        >
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarButton: ['Editar','EditarTar','EditarCat'].includes(route.name)
                  ? () => {
                      return null
                    }
                  : undefined,
              })}
              tabBarOptions={{
                keyboardHidesTabBar: true,
              }}
            >
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  tabBarLabel: 'Inicio',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faHome}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Movs"
                component={Movimientos}
                options={{
                  tabBarLabel: 'Movimientos',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faListAlt}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Editar"
                component={Editar}
                options={{
                  tabBarLabel: 'Editar',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faEdit}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Agregar"
                component={Agregar}
                options={{
                  tabBarLabel: 'Agregar',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faPlusSquare}
                      color="indianred"
                      size={30}
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Informes"
                component={Informes}
                options={{
                  tabBarLabel: 'Informes',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faChartBar}
                      color="indianred"
                      size={30}
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Config"
                children={() => (
                  <Configuracion
                    onLogout={logout}
                    onChangeConfig={handleChangeConfig}
                    
                  ></Configuracion>
                )}
                options={{
                  tabBarLabel: 'Perfil',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      color="indianred"
                      size={30}
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="EditarCat"
                component={EditarCat}
                options={{
                  tabBarLabel: 'EditarCat',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faEdit}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Categoria"
                component={Categoria}
                options={{
                  tabBarLabel: 'Categoria',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faEdit}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="EditarTar"
                component={EditarTar}
                options={{
                  tabBarLabel: 'EditarTar',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faEdit}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
              <Tab.Screen
                name="Tarjeta"
                component={Tarjeta}
                options={{
                  tabBarLabel: 'Tarjeta',
                  tabBarIcon: () => (
                    <FontAwesomeIcon
                      icon={faEdit}
                      size={30}
                      color="indianred"
                    ></FontAwesomeIcon>
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </GlobalContext.Provider>
      )}
    </>
  )
}
