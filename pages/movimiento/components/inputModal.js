import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from './modal'
export default function InputModal({ label, value, setValue }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.row}>
        <View style={styles.rowItem80}>
          <Text style={styles.inputTxt}>
            {label === 'Fecha' ? value : value}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.rowItem20}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputTxt}>Edit</Text>
        </TouchableOpacity>
        <Modal
          tipo={label}
          value={value}
          setValue={setValue}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
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
