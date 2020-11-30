import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from './../../global-components/loader'
import Formulario from './components/formulario'
import { useFocusEffect } from '@react-navigation/native'

export default function Editar({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [tarjeta, setTarjeta] = useState();

  
  useFocusEffect(
    React.useCallback(() => {
      console.debug('screen takes focus', route.params.id)
      if (loading) {
        buscarTarjeta(route.params.id)
      }
      return () => console.debug('screen loses focus')
    }, [loading])
  )



  const buscarTarjeta = async (id) => {
    const api = await getApiClient()
    const url = `tarjeta`
    await api.get(`${url}/${id}`).then((response) => {
      console.log(response.data)
      let tar = response.data
      setTarjeta(tar)
      setLoading(false)
      console.log("DEL EDITAR")
      console.log(tarjeta)
      console.log(loading)
    })
    
  }

  

  return (
    <>
      
      {!loading ? (
        <Formulario navigation={navigation} tarjeta={tarjeta}/>
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


