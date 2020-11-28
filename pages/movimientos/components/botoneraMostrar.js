import React from 'react'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native'

export default function botoneraMostrar({ mostrar, getAllMovimientos, getMonthMovimientos, getAllMovimientosRecurrentes }) {

  return (
    <View style={styles.container}>
      {mostrar === 'mes' ? (
        <Button title="Ver más" onPress={getAllMovimientos} />
      ) : (
        <></>
      )}
      {mostrar === 'todos' ? (
        <Button title="Ver menos" onPress={getMonthMovimientos} />
      ) : (
        <></>
      )}
      {mostrar === 'recurrentes' ? (
        <Button title="Volver" onPress={getMonthMovimientos} />
      ) : (
        <Button
          title="Ver recurrentes"
          onPress={getAllMovimientosRecurrentes}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
