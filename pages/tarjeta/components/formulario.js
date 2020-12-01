import React, { useEffect, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native'
import InputTxtBox from '../../../global-components/inputTxtBox'
import Row2Botones from '../../../global-components/row2Botones'
import HeaderTarjeta from './headerTarjeta'
import Constants from 'expo-constants'
import getApiClient from '../../../api/ApiClient'

let fullWidth = Dimensions.get('window').width //full width
const opAgregar = {
  subtitulo: 'Agregar',
  label2: 'Borrar',
}
const opEditar = {
  subtitulo: 'Editar',
  label2: 'Cancelar',
}
export default function Formulario(props) {
  const [color, setColor] = useState('')
  const [descripcion, setDescripcion] = useState(props.tarjeta.descripcion)
  const [nombre, setNombre] = useState(props.tarjeta.nombre)
  const [opciones, setOpciones] = useState(opAgregar)
  


  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect form')
      if (props.tarjeta._id) {
        setOpciones(opEditar)
      }
      borrar()
      return () => console.debug('form loses focus')
    }, [props.tarjeta._id])
  )


  
  
  useEffect(() => {
    if(props.tarjeta._id){
      setDescripcion(props.tarjeta.descripcion)
    }    
  }, [])

  const guardar = async () => {
    if (opciones.subtitulo === 'Editar') {
      setDescripcion(props.tarjeta.descripcion)
    }
    let tar = {
      descripcion: descripcion,
      nombre: nombre,
    }
    
      const api = await getApiClient()
      const tarURL = 'tarjeta'
      if (opciones.subtitulo === 'Agregar') {
        await api
          .post(`${tarURL}`, tar)
          .then((response) => console.log(response))
          .catch((err) => btnAlert(err.response.data))
      } else {
        await api
          .put(`${tarURL}/${props.tarjeta._id}`, tar)
          .then((response) => console.log(response))
          .catch((err) => console.log(err))
      }
      console.log(tar)
      props.navigation.navigate('Tars')
  }


  const borrar = () => {
    setDescripcion(props.tarjeta.tarjeta)
    setNombre(props.tarjeta.nombre)
  }
  const reset = () => {
    borrar()
    if (opciones.subtitulo === 'Editar') {
      props.navigation.navigate('Tars')
    }
  }

  const btnAlert = (msj) =>
    Alert.alert('Error', msj, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <HeaderTarjeta />
          <View style={styles.bigContainer}>
            <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
            <ScrollView>
            
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <InputTxtBox
                    label="Nombre"
                    setValue={setNombre}
                    value={nombre.toString()}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <InputTxtBox
                    label="Descripción"
                    setValue={setDescripcion}
                    value={descripcion}
                  />
                </View>
              </View>
                
            </ScrollView>
            <Row2Botones
              label1="Guardar"
              action1={guardar}
              label2={opciones.label2}
              action2={reset}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  subtitulo: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10,
  },
  tipoEditable: {
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    borderWidth: 1,
    borderRadius: 19,
  },
})
