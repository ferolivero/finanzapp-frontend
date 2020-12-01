import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useEffect , useContext, useState } from 'react'
import { Button , Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import Selector from '../../global-components/selector'
import getApiClient from '../../api/ApiClient'
import GlobalContext from '../../components/global/context'
import Loader from '../../global-components/loader'
import HeaderCategorias from './components/headerCategorias'
import CatRow from './components/catRow'
let fullWidth = Dimensions.get('window').width - 40

export default function Categorias({ navigation }) {
  const context = useContext(GlobalContext)
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('')
  const [categorias, setCategorias] = useState()
  const [mostrar, setMostrar] = useState('gasto')

  const getAllCategorias = async () => {
    getCategorias(`categoria/`, 'todos')
  }

  const getAllCategoriasGasto = async () => {
    getCategorias(`categoria/`, 'gasto')
  }

  const getAllCategoriasIngreso = async () => {
    getCategorias(`categoria/`, 'ingreso')
  }

  const getCategorias = async (url, mostrar) => {
    setLoading(true)
    setMostrar(mostrar)
    const api = await getApiClient()
    await api
      .get(url+mostrar)
      .then((response) => {
        setCategorias(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  const onDeleteSuccess = () => {
    if (mostrar === 'todos') {
      getAllCategorias()
    } else if (mostrar === 'gasto') {
      getAllCategoriasGasto()
    } else {
      getAllCategoriasIngreso()
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      setMostrar('gasto')
      getAllCategoriasGasto()
      return () => console.debug('screen loses focus')
    }, [])
  )

  const renderItem = ({ item }) => (
    <CatRow
      cat={item}
      mostrar={mostrar}
      config={context.config}
      onDeleteSuccess={onDeleteSuccess}
      navigation={navigation}
    />
  )

  useEffect(() => {
    if (mostrar === 'ingreso') {
      setColor('rgb(0,125,0)')
      getAllCategoriasIngreso()
    } else {
      setColor('rgb(255,0,0)')
      getAllCategoriasGasto()
    }
  }, [mostrar])

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <HeaderCategorias />
          <View style={styles.bigContainer}>
            
              <Selector
                onPressAction={setMostrar}
                color={color}
                posicion={mostrar === 'gasto' ? 0 : 1}
              />              
         
            <FlatList
              style={styles.flatlist}
              data={categorias}
              renderItem={renderItem}
              keyExtractor={(item) => item._id}
            />
            <View style={styles.btn}>
            <Button onPress={ () =>  navigation.navigate('AgregarCat')  } title="Agregar Categoria"></Button>
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
