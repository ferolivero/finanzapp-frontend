import { faPencilAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, TouchableOpacity, View, Alert, Text } from 'react-native'
import getApiClient from './../../../api/ApiClient'

export default function BtnEditDelete({
  id,
  navigation,
  tipo,
}) {
  const queresBorrar = () => {
    Alert.alert(
      `Borrar ${tipo}`,
      'Si borra este movmiento, no se podrá recuperar.',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('No se borra el movmiento' + id),
          style: 'cancel',
        },
        { text: 'Borrar', onPress: () => borrar() },
      ],
      { cancelable: true }
    )
  }

  const borrar = async () => {
    const api = await getApiClient()
    const url = 'categoria'
    await api
      .delete(`${url}/${id}`)
      .then((response) => {
      })
      .catch((err) => console.log(err.message)) //meter alert
  }

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => navigation.navigate('EditarCat', { id: id,  tipo: tipo })}
        >
          <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
        </TouchableOpacity>
      

      <TouchableOpacity style={styles.btnBorrar} onPress={() => queresBorrar()}>
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
  txtRight: {
    textAlign: 'right',
    fontSize: 20,
    marginLeft: 5,
  },
})
