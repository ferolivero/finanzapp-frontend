import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync() {
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
    const { type, accessToken } = result;

    if (type === 'success') {
      /* Log-Out */
      await Google.logOutAsync({ accessToken, ...config });
      /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
    }
  } catch (e) {
    console.error("Error: ", e)
    return { error: true };
  }
}

const LoginForm = () => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    {/* Asi seria con un boton normal */}
    {/* <Button
      title="Google Sign in"
      onPress={() => signInWithGoogleAsync()}

    /> */}

    {/* Asi seria con un TouchableOpacity que permite agregar varios elementos para que sean "touchables" */}
    {/* En este ejemplo yo les puse una simple imagen para Google Sign In */}
    <TouchableOpacity
      style={styles.buttonGPlusStyle}
      activeOpacity={0.5}
      onPress={() => signInWithGoogleAsync()}
      >
      <Image
        source={require('./../../assets/btn_google_signin.png')}
        style={styles.buttonImageIconStyle}
      />
    </TouchableOpacity>
  </View>
)

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


export default LoginForm;