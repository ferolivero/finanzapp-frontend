import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import BtnOrCuotas from './btnOrCuotas'
let fullWidth = Dimensions.get('window').width - 40 //full width

export default function CatRow({
  cat,
  mostrar,
  onDeleteSuccess,
  navigation,
}) {
  let rowColor = cat.tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'
  return (
    <View>
      <View style={styles.rowWrapperUp}>
        <View style={styles.rowWrapperInterior}>
          <View style={styles.col}>
            <Text style={[styles.txtLeft, { color: rowColor }]}>
              {`Nombre: ${cat.nombre}`}
            </Text>
          </View>          
        </View>        
      </View>
      <View style={styles.rowWrapperDown}>
        <View style={styles.rowWrapperInterior}>
          <View style={styles.col}>
            <Text
              style={[styles.txtLeft, { color: rowColor }]}
            >{`Tipo: ${cat.tipo.toUpperCase()}`}</Text>
          </View>
        </View>
        <View>
          <BtnOrCuotas
            cat={cat}
            mostrar={mostrar}
            onDeleteSuccess={onDeleteSuccess}
            navigation={navigation}
          />
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
