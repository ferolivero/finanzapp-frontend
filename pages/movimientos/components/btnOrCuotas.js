import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BtnEditDelete from './btnEditDelete'

export default function btnOrCuotas({
  mov,
  mostrar,
  onDeleteSuccess,
  navigation,
}) {
  let rowColor = mov.tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'
  if (mov.cuotaCant) {
    return (
      <Text
        style={[styles.txtRight, { color: rowColor }]}
      >{`Cuota ${mov.cuotaNum} de ${mov.cuotaCant}`}</Text>
    )
  } else if (mov.cuotasRestantes) {
    return (
      <Text style={[styles.txtRight, { color: rowColor }]}>{`Cuota ${
        mov.cuotas - mov.cuotasRestantes
      } de ${mov.cuotas}`}</Text>
    )
  } else {
    return (
      <BtnEditDelete
        navigation={navigation}
        id={mov._id.toString()}
        mostrar={mostrar}
        tipo={mov.tipo}
        onDeleteSuccess={onDeleteSuccess}
      />
    )
  }
}

const styles = StyleSheet.create({
  txtRight: {
    textAlign: 'right',
    fontSize: 20,
    flex: 1,
    marginLeft: 5,
  },
})
