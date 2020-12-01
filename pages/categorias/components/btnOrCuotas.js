import React from 'react'
import { StyleSheet, Text } from 'react-native'
import BtnEditDelete from './btnEditDelete'

export default function btnOrCuotas({
  cat,
  mostrar,
  onDeleteSuccess,
  navigation,
}) {
  let rowColor = cat.tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'
  if (cat.cuotaCant) {
    return (
      <Text
        style={[styles.txtRight, { color: rowColor }]}
      >{`Cuota ${cat.cuotaNum} de ${cat.cuotaCant}`}</Text>
    )
  } else if (cat.cuotasRestantes) {
    const cuotasRest = `C: ${cat.cuotas - cat.cuotasRestantes} de ${cat.cuotas}`
    return (
      <BtnEditDelete
        navigation={navigation}
        id={cat._id.toString()}
        mostrar={mostrar}
        tipo={cat.tipo}
        onDeleteSuccess={onDeleteSuccess}
        cuotasRest={cuotasRest}
      />
    )
  } else {
    return (
      <BtnEditDelete
        navigation={navigation}
        id={cat._id.toString()}
        mostrar={mostrar}
        tipo={cat.tipo}
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
