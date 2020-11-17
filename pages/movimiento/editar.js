import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from './../../global-components/loader'
import Formulario from './components/formulario'

export default function Editar({ navigation, route }) {
  const [loading, setLoading] = useState(true)
  const [movimiento, setMovimiento] = useState()

  useEffect(() => {
    buscarMovimiento(route.params.id)
  }, [route.params.id])

  const buscarMovimiento = async (id) => {
    const api = await getApiClient()
    await api.get(`movimiento/${id}`).then((response) => {
      setMovimiento(response.data)
      setLoading(false)
    })
  }

  return (
    <>
      {!loading ? (
        <Formulario navigation={navigation} movimiento={movimiento} />
      ) : (
        <Loader></Loader>
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
