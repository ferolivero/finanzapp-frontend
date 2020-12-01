import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BtnEditDelete from './btnEditDelete'

export default function btnOrCuotas({
  tar,
  mostrar,
  onDeleteSuccess,
  navigation,
}) {
  let rowColor = tar.descripcion === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'
  if (tar.cuotaCant) {
    return (
      <Text
        style={[styles.txtRight, { color: rowColor }]}
      >{`Cuota ${tar.cuotaNum} de ${tar.cuotaCant}`}</Text>
    )
  } else if (tar.cuotasRestantes) {
    const cuotasRest = `C: ${tar.cuotas - tar.cuotasRestantes} de ${tar.cuotas}`
    return (
      <BtnEditDelete
        navigation={navigation}
        id={tar._id.toString()}
        mostrar={mostrar}
        descripcion={tar.descripcion}
        onDeleteSuccess={onDeleteSuccess}
        cuotasRest={cuotasRest}
      />
    )
  } else {
    return (
      <BtnEditDelete
        navigation={navigation}
        id={tar._id.toString()}
        mostrar={mostrar}
        descripcion={tar.descripcion}
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
