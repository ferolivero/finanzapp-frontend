import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native'
import BtnOrCuotas from './btnOrCuotas'
let fullWidth = Dimensions.get('window').width - 40 //full width

export default function CatRow({
  id , tipo, nombre ,navigation , config , cat , botones
}) {
  let rowColor = tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'

  return (
    <View>
    
    <View style={styles.rowWrapperDown}>
      <View style={styles.rowWrapperInterior}>
        <View style={styles.col}>
        <Text style={[styles.txtRight, { color: rowColor }]}>
          {cat.nombre}
        </Text>
      </View>
      </View>
      <View>
        {botones === "Agregar" ? (
        <BtnOrCuotas
          cat={cat}
          navigation={navigation}
        />
        ) :
        (
          <Text ></Text>
        )}
      </View>
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  rowWrapperUp: {
    width: fullWidth,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowWrapperDown: {
    width: fullWidth,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 1,
  },
  rowWrapperInterior: {
    width: fullWidth,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
  },
  txtRight: {
    textAlign: 'right',
    fontSize: 20,
    flex: 1,
    marginLeft: 5,
  },
  txtLeft: {
    textAlign: 'left',
    fontSize: 20,
    flex: 1,
  },
})