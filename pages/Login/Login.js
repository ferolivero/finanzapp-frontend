import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync(onLoginSuccess) {
  console.log("Inicia logueo... ")
  try {
    const config = {
      // Se tiene que configurar un clientID para una App en iOS (pueden usar esta que estara disponible hasta el 31 de octubre)
      iosClientId: `965440611676-l44ls589vsp17lf9nnok70rgbmcndjhn.apps.googleusercontent.com`,
      // Se tiene que configurar un clientID para una App en Android (pueden usar esta que estara disponible hasta el 31 de octubre)
      androidClientId: `965440611676-st0f6b7mpuc25k6afr2ha1eq8k6oabf0.apps.googleusercontent.com`,
    };

    const result = await Google.logInAsync(config);
    console.log("Result: ", result)
    // const { type, accessToken } = result;

    // if (type === 'success') {
    //   console.log('Inicia el logout');
    //   /* Log-Out */
    //   await Google.logOutAsync({ accessToken, ...config });
    //   /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
    // }

    onLoginSuccess(result);
    return result;
  } catch (e) {
    console.error("Error: ", e)
    return { error: true };
  }
}

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
    margin: 50,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    width: 260,
    height: 80,
    resizeMode: 'stretch',
  },
});

export default function LoginScreen (props){
  console.log(props.onLoginSuccess);
  return (<View style={styles.container}>
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
  </View>)
}