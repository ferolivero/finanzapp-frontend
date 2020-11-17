import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Formulario from './components/formulario'

export default function Editar({ navigation, route }) {
  const [isReady, setIsReady] = useState(false)
  const [movimiento, setMovimiento] = useState()

  useEffect(() => {
    buscarMovimiento(route.params.id)
  }, [route.params.id])

  const buscarMovimiento = async (id) => {
    const api = await getApiClient()
    await api.get(`movimiento/${id}`).then((response) => {
      setMovimiento(response.data)
      setIsReady(true)
    })
  }

  return (
    <>
      {isReady ? (
        <Formulario navigation={navigation} movimiento={movimiento} />
      ) : (
        <View style={styles.loading}>
          <Text>Cargando</Text>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
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
