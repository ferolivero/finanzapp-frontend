import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
let fullWidth = Dimensions.get('window').width - 40 //full width

export default function MovRow({ fecha, monto, tipo, descripcion }) {
  let rowColor = tipo === 'ingreso' ? 'rgb(0,128,0)' : 'rgb(255,0,0)'

  return (
    <View style={styles.rowWrapper}>
      <View style={styles.rowWrapper2}>
        <View style={styles.col}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              color: rowColor,
              flex: 1,
            }}
          >
            {fecha}:
          </Text>
        </View>
        <View style={styles.col}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 20,
              color: rowColor,
              flex: 1,
              marginLeft: 5,
            }}
          >
            {descripcion.substring(0,13)}
          </Text>
        </View>
      </View>
      <View style={styles.col}>
        <Text
          style={{ textAlign: 'right', fontSize: 20, color: rowColor, flex: 1 }}
        >
          {monto}
        </Text>
      </View>
      <View style={styles.col}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 20,
            color: rowColor,
            flex: 1,
            marginLeft: 5,
          }}
        >
          $
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rowWrapper: {
    width: fullWidth,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowWrapper2: {
    width: fullWidth,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  col: {
    flexDirection: 'column',
  },
})
