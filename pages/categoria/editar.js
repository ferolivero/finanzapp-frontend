import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from './../../global-components/loader'
import Formulario from './components/formulario'
import { useFocusEffect } from '@react-navigation/native'

export default function Editar({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState();

  
 

  useFocusEffect(
    React.useCallback(() => {
      console.debug('screen takes focus', route.params.id)
      if (loading) {
      buscarCategoria(route.params.id,route.params.tipo)
      }
      return () => console.debug('screen loses focus')
    }, [loading])
  )

  const buscarCategoria = async (id,tipo) => {
    const api = await getApiClient()
    const url = `categoria`
    await api.get(`${url}/${tipo}/${id}`).then((response) => {
      console.log(response.data)
      let cat = response.data
      setCategoria(cat)
      setLoading(false)
      console.log(loading)
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


