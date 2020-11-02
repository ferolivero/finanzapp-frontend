import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Modal, Button, Picker } from 'react-native';

let fullWidth = Dimensions.get('window').width;

export default function ModalCategorias({ categoria, setCategoria, modalVisible, setModalVisible }) {

    const [categoriaModal, setCategoriaModal] = useState(categoria);

    const seleccionar = () => {
        setCategoria(categoriaModal);
        setModalVisible(false);
    }

    const cancelar = () => {
        setModalVisible(!modalVisible);
        setCategoriaModal(categoria);
        setModalVisible(false);
    }

    let categorias = ["Comida", "Bebida", "Vivienda", "Otros"];

    return (
        <View>
            <Modal style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible(true) }}
            >
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderTxt}>Categorías</Text>
                    </View>
                    <Picker
                        selectedValue={categoriaModal}
                        style={styles.modalPicker}
                        onValueChange={(itemValue) =>
                            setCategoriaModal(itemValue)
                        }>
                        {
                            categorias.map(item => (
                                <Picker.Item label={item} value={item} />
                            ))
                        }
                    </Picker>
                    <View style={styles.row}>
                        <Button title="Seleccionar" onPress={seleccionar} />
                        <Button title="Cancelar" onPress={cancelar} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        bottom: 0,
        position: 'absolute',
        bottom: 0,
        width: fullWidth - 40
    },
    modalheader: {
        borderBottomWidth: 1,
        width: fullWidth - 40,
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#D3D3D3'
    },
    modalHeaderTxt: {
        fontSize: 20,
        color: '#A9A9A9'
    },
    modalPicker: {
        height: 200,
        width: fullWidth - 40
    }
});