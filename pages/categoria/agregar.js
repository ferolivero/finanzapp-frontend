import React from 'react'
import Formulario from './components/formulario'

export default function Agregar({ navigation }) {
  const cat = {
    id: null,
    tipo: 'gasto',
    nombre: '',
    user: ""
  }
  console.log(navigation);

  return <Formulario navigation={navigation} categoria={cat} />
}
