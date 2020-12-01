import React from 'react'
import Formulario from './components/formulario'

export default function Agregar({ navigation }) {
  const tar = {
    id: null,
    descripcion: '',
    nombre: '',
    user: ""
  }
  console.log(navigation);

  return <Formulario navigation={navigation} tarjeta={tar} />
}
