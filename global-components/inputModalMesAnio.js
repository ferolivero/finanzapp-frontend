import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from './modalMesAnio'
export default function InputModalMesAnio({
  label,
  mes,
  setMes,
  anio,
  setAnio,
}) {
  const [modalVisible, setModalVisible] = useState(false)

  const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const getFormatedLabelDate = (mes, anio) => {
    return `${monthNames[mes - 1]} - ${anio}`
  }

  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowItem80}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputTxt}>{getFormatedLabelDate(mes, anio)}</Text>
        </TouchableOpacity>
        <Modal
          tipo={label}
          mes={mes}
          setMes={setMes}
          anio={anio}
          setAnio={setAnio}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowItem80: {
    flexDirection: 'column',
    flex: 4,
    marginRight: 2,
  },
  rowItem20: {
    flexDirection: 'column',
    flex: 1,
  },
  inputTxt: {
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 25,
    paddingLeft: 2,
    marginBottom: 20,
  },
})
