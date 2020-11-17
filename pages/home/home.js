import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import MovRow from './components/movRow'
import HeaderHome from './components/headerHome'
import Constants from 'expo-constants'
import getApiClient from './../../api/ApiClient'

export default function Home({ navigation }) {
  const [movimientos, setMovimientos] = useState()


  const getMovimientos = async () => {
    const api = await getApiClient()
    console.log('API', api)
    await api.get('movimiento').then((response) => {
      console.log(response.data)
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
      fecha={dateFormated(item.fecha)}
      monto={item.monto}
      descripcion={item.descripcion}
    />
  )

  return (
    <View style={styles.container}>
      <HeaderHome />
      <View style={styles.bigContainer}>
        <Text style={styles.txt20}>Gastos $4543 | Ingresos $4534</Text>
        <Text style={styles.txt30}>Últimos movimientos</Text>
        <FlatList
          style={styles.flatlist}
          data={movimientos}
          renderItem={renderItem}
          keyExtractor={(item) => item.__id}
        />
        <Button
          title="Ver más"
          onPress={() => {
            navigation.navigate('Movimientos')
          }}
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
