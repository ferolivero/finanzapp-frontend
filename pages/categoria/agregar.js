import React from 'react'
import Formulario from './components/formulario'

export default function Agregar({ navigation }) {
  const cat = {
    id: null,
    tipo: 'gasto',
    nombre: '',
  }
  console.log(navigation);

  return <Formulario navigation={navigation} categoria={cat} />
}
