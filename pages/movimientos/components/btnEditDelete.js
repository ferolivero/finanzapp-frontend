import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import getApiClient from './../../../api/ApiClient'



export default function BtnEditDelete({ id, navigation, tipo, onDeleteSuccess }) {
  const borrar = async (id) => {
    const api = await getApiClient()
    await api.delete(`movimiento/${tipo}/${id}`).then((response) => {
      onDeleteSuccess()
    }).catch((err) => console.log(err.message)) //meter alert
  }
  
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <TouchableOpacity
        style={styles.btnEdit}
        onPress={() => navigation.navigate('Editar', { id: id })}
      >
        <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnBorrar} onPress={()=>borrar(id)}>
        <FontAwesomeIcon icon={faTimesCircle} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btnEdit: {
    padding: 5,
    marginBottom: 3,
  },
  btnBorrar: {
    padding: 5,
    marginBottom: 3,
  },
})
