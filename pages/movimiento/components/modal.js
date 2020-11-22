import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Dimensions, Modal, Picker } from 'react-native'
import Row2Botones from '../../../global-components/row2Botones'
import ModalHeader from '../../../global-components/modalHeader'
import getApiClient from './../../../api/ApiClient'

let fullWidth = Dimensions.get('window').width

export default function ModalPropio({
  tipo,
  label,
  value,
  setValue,
  modalVisible,
  setModalVisible,
}) {
  const [valueModal, setValueModal] = useState(value)
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    buscarCategorias()
  }, [])
  
  const buscarCategorias = async () => {
    const api = await getApiClient()
    await api.get(`categoria`).then((response) => {
      setCategorias(response.data)
    })
  }


  useEffect(() => {
    setValueModal(value)
  }, [value])

  const seleccionar = () => {
    setValue(valueModal)
    setModalVisible(false)
  }

  const cancelar = () => {
    setValueModal(value)
    setModalVisible(false)
  }

  const getCategorias = () => {
    console.log()
    return categorias.filter(x => x.tipo === tipo)
  }

  const onChangeCategorias = (selectedItem) => {
    const currentItem = selectedItem || valueModal
    setValueModal(currentItem)
  }
  // let categorias = [
  //   { key: 1, value: 'Comida' },
  //   { key: 2, value: 'Bebida' },
  //   { key: 3, value: 'Vivienda' },
  //   { key: 4, value: 'Otros' },
  // ]

  return (
    <View>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true)
        }}
      >
        <View style={styles.modalView}>
          <ModalHeader texto={label} />
          <Picker
            selectedValue={valueModal}
            style={styles.modalPicker}
            onValueChange={onChangeCategorias}
          >
            {getCategorias().map((item) => (
              <Picker.Item
                key={item._id}
                label={item.nombre}
                value={item.nombre}
              />
            ))}
          </Picker>

          <Row2Botones
            label1="Seleccionar"
            action1={seleccionar}
            label2="Cancelar"
            action2={cancelar}
          />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    bottom: 0,
    position: 'absolute',
    bottom: 0,
    width: fullWidth - 40,
  },
  modalheader: {
    borderBottomWidth: 1,
    width: fullWidth - 40,
    alignItems: 'center',
    paddingBottom: 15,
    borderBottomColor: '#D3D3D3',
  },
  modalHeaderTxt: {
    fontSize: 20,
    color: '#A9A9A9',
  },
  modalPicker: {
    height: 200,
    width: fullWidth - 40,
  },
})
