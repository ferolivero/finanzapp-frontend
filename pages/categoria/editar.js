import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from './../../global-components/loader'
import Formulario from './components/formulario'
import { useFocusEffect } from '@react-navigation/native'

export default function Editar({ navigation, route }) {
  const [loading, setLoading] = useState(true)
  const [categoria, setCategoria] = useState()

  useEffect(() => {
    setLoading(false)
  }, [categoria])

  useEffect(() => {
    if (loading) {
      buscarCategoria(route.params.id,route.params.tipo)
    }
  }, [loading])

  useFocusEffect(
    React.useCallback(() => {
      console.debug('screen takes focus', route.params.id)
      setLoading(true)
      return () => console.debug('screen loses focus')
    }, [])
  )

  const buscarCategoria = async (id,tipo) => {
    const api = await getApiClient()
    const url = 'categoria'
    await api.get(`${url}/${tipo}/${id}`).then((response) => {
      let cat = response.data
      cat.fecha = new Date(cat.fecha)
      setCategoria(cat)
      setLoading(false)
    })
  }

  return (
    <>
      {!loading ? (
        <Formulario navigation={navigation} categoria={categoria}/>
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
