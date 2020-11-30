import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalContext from '../../components/global/context'
import getApiClient from './../../api/ApiClient'
import Loader from './../../global-components/loader'
import HeaderHome from './components/headerHome'

export default function Home({ navigation }) {
  const context = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const [balance, setBalance] = useState()
  const dateFormated = (fecha) => {
    return fecha.substring(0, 7)
  }
  const mesActual = dateFormated(new Date(Date.now()).toISOString())
  const getBalance = async (mes = mesActual) => {
    const api = await getApiClient()
    await api.get(`movimiento/balance/${mes}`).then((response) => {
      setBalance(response.data)
      setLoading(false)
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('home takes focus')
      console.log(context.config)
      getBalance()
      return () => console.debug('home loses focus')
    }, [])
  )
  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <Text style={styles.txt30}>Bienvenido a FinanzApp</Text>
          <Text style={styles.txt20}>Aplicacion de finanzas personales</Text>
          <HeaderHome
            balance={balance.balance}
            ingresos={balance.ingresos}
            gastos={balance.gastos}
          />

          <View style={styles.bigContainer}>
            <Text style={styles.txt30}>Totales del Mes</Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}
            />
            <Text style={{ fontSize: 25 }}>
              Tus Gastos {context.config.moneda}
              {balance.gastos}
            </Text>
            <Text style={{ fontSize: 25 }}>
              Tus Ingresos {context.config.moneda}
              {balance.ingresos}
            </Text>
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
    marginTop: 15,
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
