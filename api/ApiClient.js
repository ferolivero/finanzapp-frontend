import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { Alert } from 'react-native'
import { getData } from './components/StorageComponent'
const tokenStorageKey = '@app_token'

const getAccessToken = async () => {
  try {
    const retrievedItem = await getData(tokenStorageKey)
    if (retrievedItem !== null) {
      const item = JSON.parse(retrievedItem)
      console.log(item)
      const authorization = `Bearer ${item.token}`
      return authorization
    }
    return null
  } catch (error) {
    console.log(error)
  }
}

const apiClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: 'application/json',
  },
})

const getApiClient = async () => {
  apiClient.defaults.headers.common.Authorization = await getAccessToken()
  return apiClient
}

export default getApiClient
function getUrl(config) {
  if (config.baseURL) {
    return config.url.replace(config.baseURL, '')
  }
  return config.url
}

// Intercept all requests
apiClient.interceptors.request.use(
  (config) => {
    console.log(
      `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
      'color: #0086b3; font-weight: bold',
      config
    )
    return config
  },
  (error) => Promise.reject(error)
)

// Intercept all responses
apiClient.interceptors.response.use(
  async (response) => {
    if (response.status === 401) {
      try {
        const value = await getData(tokenStorageKey)
        if (value !== null) {
          AsyncStorage.clear()
          // NavigationService.navigate('AuthStackScreen')
        }
      } catch (error) {
        console.log(error, 'Error al obtener los datos del Storage')
      }
      Alert.alert('Acceso denegado.')
    }
    return response
  },
  (error) => {
    console.log(error)
    if (error.response.status === 429) {
      Alert.alert('Demasiados intentos. Por favor volve a intentar luego.')
    }
    return Promise.reject(error)
  }
)
