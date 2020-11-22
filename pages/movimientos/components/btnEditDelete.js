import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

export default function BtnEditDelete({ id, navigation }) {

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <TouchableOpacity
        style={styles.btnEdit}
        onPress={() => navigation.navigate('Editar', { id: id })}
      >
        <Text style={styles.txtBtn}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBorrar}>
        <Text style={styles.txtBtn}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  txtBtn: {
    textAlign: 'left',
    fontSize: 20,
    color: '#ffffff',
  },
  btnEdit: {
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 3,
    backgroundColor: 'rgb(0,128,0)',
  },
  btnBorrar: {
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 3,
    marginLeft: 3,
    backgroundColor: 'rgb(255,0,0)',
  },
})
