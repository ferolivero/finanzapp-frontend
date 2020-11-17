import React from 'react'
import Formulario from './components/formulario'

export default function Agregar({ navigation }) {
  const mov = {
    _id: null,
    tipo: 'gasto',
    monto: '',
    descripcion: '',
    fecha: Date.now(),
    categoria: 'Otros',
  }

  return <Formulario navigation={navigation} movimiento={mov} />
}
