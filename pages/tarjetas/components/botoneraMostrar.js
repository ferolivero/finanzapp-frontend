import React from 'react'
import {
  StyleSheet,
  View,
  Button,
} from 'react-native'

export default function botoneraMostrar({ mostrar, getAllCategorias, getMonthCategorias, getAllCategoriasRecurrentes }) {

  return (
    <View style={styles.container}>
      {mostrar === 'mes' ? (
        <Button title="Ver más" onPress={getAllCategorias} />
      ) : (
        <></>
      )}
      {mostrar === 'todos' ? (
        <Button title="Ver menos" onPress={getMonthCategorias} />
      ) : (
        <></>
      )}
      {mostrar === 'recurrentes' ? (
        <Button title="Volver" onPress={getMonthCategorias} />
      ) : (
        <Button
          title="Ver recurrentes"
          onPress={getAllCategoriasRecurrentes}
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
