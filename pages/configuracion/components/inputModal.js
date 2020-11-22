import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Modal from './modal'
export default function InputModal({ label, value, setValue }) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.rowItem80}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.inputTxt}>{value}</Text>
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
