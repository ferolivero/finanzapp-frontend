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
import InputModal from './inputModal'
import InputModalFecha from './inputModalFecha'
import InputTxtBox from '../../../global-components/inputTxtBox'
import InputSwitch from '../../../global-components/inputSwitch'
import Row2Botones from '../../../global-components/row2Botones'
import HeaderMovimiento from './headerMovimiento'
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
  const [tipo, setTipo] = useState(props.movimiento.tipo)
  const [monto, setMonto] = useState(props.movimiento.monto)
  const [descripcion, setDescripcion] = useState(props.movimiento.descripcion)
  const [fecha, setFecha] = useState(props.movimiento.fecha)
  const [categoria, setCategoria] = useState(props.movimiento.categoria)
  const [opciones, setOpciones] = useState(opAgregar)
  const [isRecurrente, setIsRecurrente] = useState(false)
  const [isCuotas, setIsCuotas] = useState(false)
  const [cuotas, setCuotas] = useState(1)


  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect form')
      if (props.movimiento._id) {
        setOpciones(opEditar)
      }
      borrar()
      return () => console.debug('form loses focus')
    }, [props.movimiento._id])
  )


  useEffect(() => {
    if (tipo === 'ingreso') {
      setColor('rgb(0,125,0)')
    } else {
      setColor('rgb(255,0,0)')
    }
  }, [tipo])

  const guardar = async () => {
    let mov = {
      tipo: tipo,
      monto: parseInt(monto),
      fecha: fecha,
      descripcion: descripcion,
      categoria: categoria,
    }
    if (mov.tipo === 'gasto') {
      if (isCuotas){
        mov.cuotas = cuotas
        mov.tipoPago = 'Tarjeta'
      } else {
        mov.tipoPago = 'Contado'
      }
      if (!isRecurrente) {
        mov.fechaImputacion = mov.fecha
      }
    }
    const api = await getApiClient()
    const movURL = isRecurrente || isCuotas ? 'movimiento/recurrente' : 'movimiento'
    if (opciones.subtitulo === 'Agregar') {
      await api
        .post(`${movURL}/${tipo}`, mov)
        .then((response) => console.log(response))
        .catch((err) => btnAlert(err.response.data))
    } else {
      await api
        .put(`${movURL}/${tipo}/${props.movimiento._id}`, mov)
        .then((response) => console.log(response))
        .catch((err) => console.log(err))
    }
    console.log(mov)
    props.navigation.navigate('Home')
  }

  const cambiarTipo = (tipo) => {
    setCategoria(props.movimiento.categoria)
    setTipo(tipo)
    setIsCuotas(false)
  }

  const borrar = () => {
    setTipo(props.movimiento.categoria)
    setMonto(props.movimiento.monto)
    setDescripcion(props.movimiento.descripcion)
    setFecha(props.movimiento.fecha)
    setCategoria(props.movimiento.categoria)
    setTipo(props.movimiento.tipo)
    setIsCuotas(false)
    setCuotas(1)
    if (props.isRecurrente) {
      setIsRecurrente(props.isRecurrente)
    } else {
      setIsRecurrente(false)
    }
  }

  const reset = () => {
    borrar()
    if (opciones.subtitulo === 'Editar') {
      props.navigation.navigate('Movs')
    }
  }

  const btnAlert = (msj) =>
    Alert.alert('Error', msj, [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    })

  useEffect(() => {
    setCuotas(1)
  }, [isCuotas])

  useEffect(() => {
    if (isRecurrente){
      setIsCuotas(false)
    }
  }, [isRecurrente])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <HeaderMovimiento />
          <View style={styles.bigContainer}>
            <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
            <ScrollView>
              {props.movimiento._id ? (
                <Text style={styles.tipoEditable}>
                  {props.movimiento.tipo.toUpperCase()}
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
                    label="Monto"
                    setValue={setMonto}
                    value={monto.toString()}
                    keyboardType="numeric"
                  />
                </View>
                {isCuotas ? (
                  <View style={{ flex: 1 }}>
                    <InputTxtBox
                      label="Cuotas"
                      setValue={setCuotas}
                      value={cuotas.toString()}
                      keyboardType="numeric"
                      style={{ flex: 1 }}
                    />
                  </View>
                ) : (
                  <></>
                )}
              </View>
              {
                !isRecurrente && opciones.subtitulo === 'Agregar' && tipo === 'gasto'?  (
                  <InputSwitch
                  label="Pagar en cuotas"
                  setValue={setIsCuotas}
                  value={isCuotas}
                />
                ) : (<></>)
              }
              <InputTxtBox
                label="Descripción"
                setValue={setDescripcion}
                value={descripcion}
              />
              <InputModal
                tipo={tipo}
                label="Categoría"
                value={categoria}
                setValue={setCategoria}
              />
              {
                !isRecurrente || opciones.subtitulo === 'Agregar' ?
                <InputModalFecha
                label="Fecha"
                fecha={fecha}
                setFecha={setFecha}
              /> :
              <></>
              }
              {
                !isCuotas && opciones.subtitulo === 'Agregar' ? (
                  <InputSwitch
                  label="Repetir todos los meses"
                  setValue={setIsRecurrente}
                  value={isRecurrente}
                />
                ) : (
                  <></>
                )
              }
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
