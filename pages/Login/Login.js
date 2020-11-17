import axios from 'axios'
import * as Google from 'expo-google-app-auth'
import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { apiConfig } from './../../config/ApiConfig'
import Loader from './../../global-components/loader'

let fullWidth = Dimensions.get('window').width - 40 //full width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    width: fullWidth,
    height: 80,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 15,
    paddingTop: 60,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.4,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function LoginScreen(props) {
  const [loading, setLoading] = useState(false)

  const signInWithGoogleAsync = async (onLoginSuccess) => {
    setLoading(true)
    console.log('Inicia logueo... ')
    try {
      const config = {
        // Se tiene que configurar un clientID para una App en iOS (pueden usar esta que estara disponible hasta el 31 de octubre)
        iosClientId: `965440611676-l44ls589vsp17lf9nnok70rgbmcndjhn.apps.googleusercontent.com`,
        // Se tiene que configurar un clientID para una App en Android (pueden usar esta que estara disponible hasta el 31 de octubre)
        androidClientId: `965440611676-st0f6b7mpuc25k6afr2ha1eq8k6oabf0.apps.googleusercontent.com`,
      }

      const result = await Google.logInAsync(config)
      const { type, idToken } = result

      if (type === 'success') {
        console.log('Inicia el llamado a la api')
        const params = {
          method: 'get',
          url: `${apiConfig.baseUrl}/api/token`,
          headers: {
            idToken: idToken,
          },
        }

        const response = await axios(params)
        setLoading(false)
        onLoginSuccess(response.data.accessToken)
      }
    } catch (e) {
      console.error('Error: ', e)
    }
  }

  console.log(props.onLoginSuccess)
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>FinanzApp</Text>
          <Text style={styles.subtitle}>Aplicación de Finanzas Personales</Text>

          <Text style={styles.text}>
            Por favor para continuar inicia sesión.
          </Text>
          <TouchableOpacity
            style={styles.buttonGPlusStyle}
            activeOpacity={0.5}
            onPress={() => signInWithGoogleAsync(props.onLoginSuccess)}
          >
            <Image
              source={require('./../../assets/btn_google_signin.png')}
              style={styles.buttonImageIconStyle}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}
