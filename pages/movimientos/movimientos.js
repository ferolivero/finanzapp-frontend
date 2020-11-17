import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import Constants from 'expo-constants'
import MovRow from './components/movRow'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'
import HeaderMovimientos from './components/headerMovimientos'
import getApiClient from '../../api/ApiClient'

export default function Movimientos({ navigation }) {
  const [mes, setMes] = useState('Enero')
  const [anio, setAnio] = useState('2020')
  const [movimientos, setMovimientos] = useState()

  const getMovimientos = async () => {
    const api = await getApiClient()
    await api.get('movimiento').then((response) => {
      setMovimientos(response.data)
    })
  }

  useEffect(() => {
    getMovimientos()
  }, [])

  const dateFormated = (fecha) => {
    return fecha.substring(0, 10)
  }
  const renderItem = ({ item }) => (
    <MovRow
      id={item._id}
      fecha={dateFormated(item.fecha)}
      monto={item.monto}
      categoria={item.categoria}
      navigation={navigation}
    />
  )

  return (
    <View style={styles.container}>
      <HeaderMovimientos />
      <View style={styles.bigContainer}>
        <InputModalMesAnio
          label="Mes"
          mes={mes}
          setMes={setMes}
          anio={anio}
          setAnio={setAnio}
        />
        <FlatList
          style={styles.flatlist}
          data={movimientos}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
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
    paddingTop: Constants.statusBarHeight,
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
