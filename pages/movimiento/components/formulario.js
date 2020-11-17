import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native'
import Selector from '../../../global-components/selector'
import InputModal from './inputModal'
import InputTxtBox from '../../../global-components/inputTxtBox'
import Row2Botones from '../../../global-components/row2Botones'
import HeaderMovimiento from './headerMovimiento'
import Constants from 'expo-constants'
import getApiClient from '../../../api/ApiClient'

let fullWidth = Dimensions.get('window').width //full width
const opAgregar = {
  disabled: false,
  subtitulo: 'Agregar',
  label2: 'Borrar',
}
const opEditar = {
  disabled: true,
  subtitulo: 'Editar',
  label2: 'Restablecer',
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
    console.log(props.movimiento._id)
    if (props.movimiento._id) {
      setOpciones(opEditar)
    }
  }, [props.movimiento])

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
    await api
      .post(`movimiento/${tipo}`, mov)
      .then((response) => console.log(response))
      .catch((err) => console.log(err))
  }

  const reset = () => {
    setMonto(props.movimiento.monto)
    setDescripcion(props.movimiento.descripcion)
    setFecha(props.movimiento.fecha)
    setCategoria(props.movimiento.categoria)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <HeaderMovimiento />
        <View style={styles.bigContainer}>
          <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
          <Selector
            onPressAction={setTipo}
            color={color}
            posicion={tipo === 'gasto' ? 0 : 1}
            disabled={opciones.disabled}
          />
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
          <InputModal label="Fecha" value={fecha} setValue={setFecha} />
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
})
