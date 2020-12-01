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
import Selector from '../../../global-components/selector'
import InputTxtBox from '../../../global-components/inputTxtBox'
import Row2Botones from '../../../global-components/row2Botones'
import HeaderCategoria from './headerCategoria'
import Constants from 'expo-constants'
import getApiClient from '../../../api/ApiClient'

let fullWidth = Dimensions.get('window').width -40//full width
const opAgregar = {
  subtitulo: 'Agregar',
  label2: 'Cancelar',
}
const opEditar = {
  subtitulo: 'Editar',
  label2: 'Cancelar',
}
export default function Formulario(props) {
  const [color, setColor] = useState('')
  const [tipo, setTipo] = useState(props.categoria.tipo)
  const [nombre, setNombre] = useState(props.categoria.nombre)
  const [opciones, setOpciones] = useState(opAgregar)
  


  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect form')
      if (props.categoria._id) {
        setOpciones(opEditar)
      }
      borrar()
      return () => console.debug('form loses focus')
    }, [props.categoria._id])
  )


  useEffect(() => {
    if (tipo === 'ingreso') {
      setColor('rgb(0,125,0)')
    } else {
      setColor('rgb(255,0,0)')
    }
  }, [tipo])
  
  useEffect(() => {
    if(props.categoria._id){
      setTipo(props.categoria.tipo)
    } 
  }, [])

  const guardar = async () => {
    if (opciones.subtitulo === 'Editar') {
      setTipo(props.categoria.tipo)
    }
    let cat = {
      tipo: tipo,
      nombre: nombre,
    }
    const api = await getApiClient()
    const catURL = 'categoria'
    if (opciones.subtitulo === 'Agregar') {
      await api
        .post(`${catURL}`, cat)
        .then((response) => console.log(response))
        .catch((err) => btnAlert(err.response.data))
    } else {
      await api
        .put(`${catURL}/${props.categoria._id}`, cat)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }
    console.log(cat)
    props.navigation.navigate('Cats')
  }

  const cambiarTipo = (tipo) => {
    setTipo(tipo)
  }

  const borrar = () => {
    setTipo(props.categoria.tipo)
    setNombre(props.categoria.nombre)
  }
  const reset = () => {
    borrar()
    //if (opciones.subtitulo === 'Editar') {
      props.navigation.navigate('Cats')
    //}
  }

  const btnAlert = (msj) =>
    Alert.alert('Error', msj, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.containerk}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <HeaderCategoria />
          <View style={styles.bigContainer}>
            <Text style={styles.subtitulo}>{opciones.subtitulo} categoría</Text>
            <ScrollView>
              {props.categoria._id ? (
                <Text style={styles.tipoEditable}>
                  {props.categoria.tipo.toUpperCase()}
                </Text>
              ) : (
                <Selector
                  onPressAction={cambiarTipo}
                  color={color}
                  posicion={tipo === 'gasto' ? 0 : 1}
                />
              )}
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <InputTxtBox
                    label="Nombre"
                    setValue={setNombre}
                    value={nombre.toString()}
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
  },
  containerk: {
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
