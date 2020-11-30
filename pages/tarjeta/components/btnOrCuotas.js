import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BtnEditDelete from './btnEditDelete'

export default function btnOrCuotas({
  tar,
  navigation,
}) {
  let rowColor = 'rgb(255,0,0)'
    return (
      <BtnEditDelete
      navigation={navigation}
      id={tar._id.toString()}
      tipo={tar.tipo}
      descripcion={tar.descripcion}
      nombre = {tar.nombre}
      />
    )
  
}

const styles = StyleSheet.create({
  txtRight: {
    textAlign: 'right',
    fontSize: 20,
    flex: 1,
    marginLeft: 5,
  },
})
