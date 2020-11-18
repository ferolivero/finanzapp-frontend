import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Button,
} from 'react-native'
import Selector from '../../../global-components/selector'
import InputModal from './inputModal'
import InputModalFecha from './inputModalFecha'
import InputTxtBox from '../../../global-components/inputTxtBox'
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

  useEffect(() => {
    if (props.movimiento._id) {
      setOpciones(opEditar)
      reset()
    }
  }, [props.movimiento._id])

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
      mov.fechaImputacion = mov.fecha
      mov.tipoPago = 'Contado'
    }
    // setOpciones(opAgregar)

    const api = await getApiClient()
    if (opciones.subtitulo === 'Agregar') {
      await api
      .post(`movimiento/${tipo}`, mov)
      .then((response) => console.log(response))
      .catch((err) => console.log(err)) 
    } else {
      await api
      .put(`movimiento/${tipo}/${props.movimiento._id}`, mov)
      .then((response) => console.log(response))
      .catch((err) => console.log(err)) 
    }
    props.navigation.navigate('Home')
  }

  const reset = () => {
    setTipo(props.movimiento.categoria)
    setMonto(props.movimiento.monto)
    setDescripcion(props.movimiento.descripcion)
    setFecha(props.movimiento.fecha)
    setCategoria(props.movimiento.categoria)
    setTipo(props.movimiento.tipo)
    if (opciones.subtitulo === 'Editar'){
      props.navigation.navigate('Movs')
      
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <HeaderMovimiento />
        <View style={styles.bigContainer}>
          <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
          {
            props.movimiento._id ?
            <Text style={styles.tipoEditable}>{props.movimiento.tipo.toUpperCase()}</Text>
            :
            <Selector
            onPressAction={setTipo}
            color={color}
            posicion={tipo === 'gasto' ? 0 : 1}
          />
          }
          <InputTxtBox
            label="Monto"
            setValue={setMonto}
            value={monto.toString()}
            keyboardType="numeric"
          />
          <InputTxtBox
            label="Descripción"
            setValue={setDescripcion}
            value={descripcion}
          />
          <InputModal
            label="Categoría"
            value={categoria}
            setValue={setCategoria}
          />
          <InputModalFecha label="Fecha" fecha={fecha} setFecha={setFecha} />

          {/* <InputModal label="Fecha" value={fecha} setValue={setFecha} /> */}
          <Row2Botones
            label1="Guardar"
            action1={guardar}
            label2={opciones.label2}
            action2={reset}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    borderRadius: 19
  },
})
