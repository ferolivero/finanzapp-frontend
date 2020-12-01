import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useContext, useState } from 'react'
import { Button , Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import getApiClient from '../../api/ApiClient'
import GlobalContext from '../../components/global/context'
import Loader from '../../global-components/loader'
import HeaderTarjetas from './components/headerTarjetas'
import TarRow from './components/tarRow'
let fullWidth = Dimensions.get('window').width - 40

export default function Tarjetas({ navigation }) {
  const context = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  
  const [tarjetas, setTarjetas] = useState()
  const [mostrar, setMostrar] = useState('gasto')


  const getAllTarjetas = async () => {
    getTarjetas(`tarjeta/`)
  }

  const getTarjetas = async (url) => {
    setLoading(true)
    setMostrar(mostrar)
    const api = await getApiClient()
    await api
      .get(url)
      .then((response) => {
        setTarjetas(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  const onDeleteSuccess = () => {
   
      getAllTarjetas()
    
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      setMostrar('todos')
      getAllTarjetas()
      return () => console.debug('screen loses focus')
    }, [])
  )

  const renderItem = ({ item }) => (
    <TarRow
      tar={item}
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
          <HeaderTarjetas />
          <View style={styles.bigContainer}>
            <Text style={styles.subtitle}>
              Lista de Tarjetas
            </Text>
            <FlatList
              style={styles.flatlist}
              data={tarjetas}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
            <View style={styles.btn}>
            <Button onPress={ () =>  navigation.navigate('AgregarTar')  } title="Agregar Tarjeta"></Button>
            </View>
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
    marginTop: 5,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    borderWidth: 1,
    flex: 0,
    margin: 1
  },
})
