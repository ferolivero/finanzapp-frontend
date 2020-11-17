import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
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
      console.log(response.data)
      setMovimiento(response.data)
      setIsReady(true)
    })
  }

  return (
    <>
      {isReady ? (
        <Formulario navigation={navigation} movimiento={movimiento} />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})
