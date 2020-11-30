import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from './modal'
export default function InputModal({ tipo, label, value, setValue }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowItem}
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
  rowItem: {
    flexDirection: 'column',
    flex: 1,
    marginRight: 2,
  },
  inputTxt: {
    borderWidth: 1,
    fontSize: 25,
    paddingLeft: 2,
  },
})
