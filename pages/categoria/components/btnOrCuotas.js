import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BtnEditDelete from './btnEditDelete'

export default function btnOrCuotas({
  cat,
  navigation,
}) {
  let rowColor = cat.tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'
    return (
      <BtnEditDelete
      navigation={navigation}
      id={cat._id.toString()}
      tipo={cat.tipo}
      nombre={cat.nombre}
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
