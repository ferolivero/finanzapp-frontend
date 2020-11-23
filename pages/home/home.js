import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import MovRow from './components/movRow'
import HeaderHome from './components/headerHome'
import Constants from 'expo-constants'
import getApiClient from './../../api/ApiClient'
import Loader from './../../global-components/loader'

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [movimientos, setMovimientos] = useState()

  const getMovimientos = async () => {
    const api = await getApiClient()
    await api.get('movimiento').then((response) => {
      setMovimientos(response.data)
      setLoading(false)
    })
  }

  // useEffect(() => {
  //   getMovimientos()
  // }, [])

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('home takes focus')
      getMovimientos()
      return () => console.debug('home loses focus')
    }, [])
  )

  const dateFormated = (fecha) => {
    return fecha.substring(0, 10)
  }

  const renderItem = ({ item }) => (
    <MovRow
      fecha={dateFormated(item.fecha)}
      monto={item.monto}
      tipo={item.tipo}
      descripcion={item.descripcion}
    />
  )

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <HeaderHome />
          <View style={styles.bigContainer}>
            <Text style={styles.txt20}>Gastos $4543 | Ingresos $4534</Text>
            <Text style={styles.txt30}>Últimos movimientos</Text>
            <FlatList
              style={styles.flatlist}
              data={movimientos}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
        </View>
      ) : (
        <Loader></Loader>
      )}
    </>
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
  txt20: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  txt30: {
    textAlign: 'center',
    fontSize: 30,
  },
})
