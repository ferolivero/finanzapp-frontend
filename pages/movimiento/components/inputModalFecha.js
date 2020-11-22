import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
export default function InputModalFecha({ label, fecha, setFecha }) {
  const [modalVisible, setModalVisible] = useState(false)

  const handleConfirm = (date) => {
    setFecha(date)
    setModalVisible(false)
  }

  const fechaFormated = (fecha) => fecha.substring(0, 10)

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowItem80}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputTxt}>{fechaFormated(fecha)}</Text>
        </TouchableOpacity>
        <DateTimePickerModal
          headerTextIOS={label}
          isVisible={modalVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={() => setModalVisible(false)}
          isDarkModeEnabled={false}
          date={new Date(fecha)}
          locale="es_AR"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    fontSize: 25,
    paddingLeft: 2,
  },
})
