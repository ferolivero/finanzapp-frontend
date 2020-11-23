import Constants from 'expo-constants'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
} from 'react-native'
import getApiClient from '../../api/ApiClient'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'
import Loader from './../../global-components/loader'
import HeaderMovimientos from './components/headerMovimientos'
import MovRow from './components/movRow'
let fullWidth = Dimensions.get('window').width - 40

export default function Movimientos({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [mes, setMes] = useState(new Date().getMonth() + 1)
  const [anio, setAnio] = useState(new Date().getFullYear())
  const [movimientos, setMovimientos] = useState()
  const [allMovements, setAllMovements] = useState(false)

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

  const getMonthMovimientos = async () => {
    setLoading(true)
    setAllMovements(false)
    const api = await getApiClient()
    await api
      .get(`movimiento/mes/${anio}-${mes}`)
      .then((response) => {
        setMovimientos(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  const getAllMovimientos = async () => {
    setLoading(true)
    setAllMovements(true)
    const api = await getApiClient()
    await api.get(`movimiento`).then((response) => {
      setMovimientos(response.data)
      setLoading(false)
    })
  }

  const onDeleteSuccess = () => {
    if (allMovements) {
      getAllMovimientos()
    } else {
      getMonthMovimientos()
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      setAllMovements(false)
      getMovimientos(`${anio}-${mes}`)
      return () => console.debug('screen loses focus')
    }, [anio, mes])
  )

  // useEffect(() => {
  //   console.log('Desde useEffect')
  //   if (movimientos) getMovimientos(`${anio}-${mes}`)
  // }, [anio, mes])

  const renderItem = ({ item }) => <MovRow mov={item} onDeleteSuccess={onDeleteSuccess} navigation={navigation} />

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <HeaderMovimientos />
          <View style={styles.bigContainer}>
            {!allMovements ? (
              <InputModalMesAnio
                label="Fecha"
                mes={mes}
                setMes={setMes}
                anio={anio}
                setAnio={setAnio}
              />
            ) : (
              <></>
            )}
            <FlatList
              style={styles.flatlist}
              data={movimientos}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
          {!allMovements ? (
            <Button title="Ver más" onPress={getAllMovimientos} />
          ) : (
            <Button title="Ver menos" onPress={getMonthMovimientos} />
          )}
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
    marginTop: 5,
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
