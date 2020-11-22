import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from './modal'
export default function InputModal({ tipo, label, value, setValue }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.row}>
        <View style={styles.rowItem80}></View>
        <TouchableOpacity
          style={styles.rowItem80}
          onPress={() => {
            setModalVisible(true)
            console.log(modalVisible)
          }}
        >
          <Text style={styles.inputTxt}>
            {label === 'Fecha' ? value : value}
          </Text>
        </TouchableOpacity>
        <Modal
          tipo={tipo}
          label={label}
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
