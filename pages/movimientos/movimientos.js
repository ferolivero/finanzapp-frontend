import Constants from 'expo-constants'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, Dimensions, Text } from 'react-native'
import getApiClient from '../../api/ApiClient'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'
import Loader from './../../global-components/loader'
import HeaderMovimientos from './components/headerMovimientos'
import MovRow from './components/movRow'
let fullWidth = Dimensions.get('window').width - 40

export default function Movimientos({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [mes, setMes] = useState('11')
  const [anio, setAnio] = useState('2020')
  const [movimientos, setMovimientos] = useState()
  const dateFormated = (fecha) => {
    return fecha.substring(0, 7)
  }
  const mesActual = dateFormated(new Date(Date.now()).toISOString())
  const getMovimientos = async (mes = mesActual) => {
    const api = await getApiClient()
    await api.get(`movimiento/mes/${mes}`).then((response) => {
      setMovimientos(response.data)
      setLoading(false)
    })
  }

  useFocusEffect(React.useCallback(() => {
    console.debug("screen takes focus");
    getMovimientos();
    return () => console.debug("screen loses focus");
  }, []));

  // useEffect(() => {
  //   // console.log(movimientos)
  // }, [movimientos])

  useEffect(() => {
    getMovimientos(`${anio}-${mes}`)
  }, [anio, mes])

  const renderItem = ({ item }) => (
    <MovRow
      id={item._id}
      tipo={item.tipo}
      fecha={item.fecha.substring(0, 10)}
      monto={item.monto}
      descripcion={item.descripcion}
      categoria={item.categoria}
      navigation={navigation}
    />
  )

  return (
    <>
      {!loading ? (
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
    width: fullWidth,
  },
  flatlist: {
    alignSelf: 'center',
    width: fullWidth,
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
