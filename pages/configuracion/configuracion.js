import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Buttom, Button } from 'react-native'
import HeaderConfiguracion from './components/headerConfiguracion'
import Constants from 'expo-constants'

export default function Config({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <HeaderConfiguracion />
      <View style={styles.bigContainer}>
        <Text style={styles.subtitulo}>Acá van las configuraciones</Text>
        <Button onPress={onLogout} title="Deslogearse"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
  flatlist: {
    alignSelf: 'center',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
})
