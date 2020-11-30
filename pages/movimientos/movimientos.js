import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useContext, useState } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import getApiClient from '../../api/ApiClient'
import GlobalContext from '../../components/global/context'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'
import Loader from './../../global-components/loader'
import BotoneraMostrar from './components/botoneraMostrar'
import HeaderMovimientos from './components/headerMovimientos'
import MovRow from './components/movRow'
let fullWidth = Dimensions.get('window').width - 40

export default function Movimientos({ navigation }) {
  const context = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const [mes, setMes] = useState(new Date().getMonth() + 1)
  const [anio, setAnio] = useState(new Date().getFullYear())
  const [movimientos, setMovimientos] = useState()
  const [mostrar, setMostrar] = useState('mes')

  const getMonthMovimientos = async () => {
    getMovimientos(`movimiento/mes/${anio}-${mes}`, 'mes')
  }

  const getAllMovimientos = async () => {
    getMovimientos(`movimiento`, 'todos')
  }

  const getAllMovimientosRecurrentes = async () => {
    getMovimientos(`movimiento/recurrente`, 'recurrentes')
  }

  const getMovimientos = async (url, mostrar) => {
    setLoading(true)
    setMostrar(mostrar)
    const api = await getApiClient()
    await api
      .get(url)
      .then((response) => {
        setMovimientos(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  const onDeleteSuccess = () => {
    if (mostrar === 'todos') {
      getAllMovimientos()
    } else if (mostrar === 'mes') {
      getMonthMovimientos()
    } else {
      getAllMovimientosRecurrentes()
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      setMostrar('mes')
      getMonthMovimientos()
      return () => console.debug('screen loses focus')
    }, [anio, mes])
  )

  const renderItem = ({ item }) => (
    <MovRow
      mov={item}
      mostrar={mostrar}
      config={context.config}
      onDeleteSuccess={onDeleteSuccess}
      navigation={navigation}
    />
  )

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <HeaderMovimientos />
          <View style={styles.bigContainer}>
            {mostrar === 'mes' ? (
              <InputModalMesAnio
                label="Fecha"
                mes={mes}
                setMes={setMes}
                anio={anio}
                setAnio={setAnio}
              />
            ) : (
              <Text style={styles.subtitle}>{mostrar.toUpperCase()}</Text>
            )}
            <FlatList
              style={styles.flatlist}
              data={movimientos}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
          </View>
          <BotoneraMostrar
            mostrar={mostrar}
            getAllMovimientos={getAllMovimientos}
            getMonthMovimientos={getMonthMovimientos}
            getAllMovimientosRecurrentes={getAllMovimientosRecurrentes}
          />
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
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
})
