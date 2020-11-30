import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useState, useContext } from 'react'
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from '../../global-components/loader'
import Row2Botones from '../../global-components/row2Botones'
import HeaderConfiguracion from './components/headerConfiguracion'
import InputModal from './components/inputModal'
import GlobalContext from '../../components/global/context'

let fullWidth = Dimensions.get('window').width //full width

export default function Config({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  const [moneda, setMoneda] = useState('')
  const context = useContext(GlobalContext)



  const getUser = async () => {
    setLoading(true)
    const api = await getApiClient()
    await api
      .get('/config/user')
      .then((response) => {
        setUser(response.data)
        setMoneda(response.data.moneda)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      getUser()
      return () => console.debug('screen loses focus')
    }, [])
  )

  const handleSaveConfig = async () => {
    setLoading(true)
    let userConfig = { ...user, moneda }
    console.log({ userConfig })
    const api = await getApiClient()
    await api
      .put('/config/user', userConfig)
      .then((response) => {
        setUser(response.data)
        context.onChangeConfig(userConfig)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  const reset = () => {
    setNombre(user.nombre)
    setMoneda(user.moneda)
  }

  return (
    <>
      {!loading ? (
        <View style={styles.container}>
          <HeaderConfiguracion />
          <View style={styles.bigContainer}>
            <Text style={styles.subtitulo}>{`${user._id}`.toUpperCase()}</Text>
            <Text style={styles.subtitulo}> {user.nombre}</Text>
            <InputModal label="Moneda" value={moneda} setValue={setMoneda} />
            <Row2Botones
              label1="Guardar"
              action1={handleSaveConfig}
              label2="Restablecer"
              action2={reset}
            />
            <Button onPress={ () =>  navigation.navigate('Categoria')  } title="Categoria"></Button>
            <Button onPress={ () =>  navigation.navigate('Tarjeta')  } title="Tarjeta"></Button>
            <Button onPress={context.onLogout} title="Deslogearse"></Button>
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
    paddingLeft: 30,
    paddingRight: 30,
    width: fullWidth,
  },
  flatlist: {
    alignSelf: 'center',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
})
