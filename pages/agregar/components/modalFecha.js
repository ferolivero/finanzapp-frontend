import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Modal, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

let fullWidth = Dimensions.get('window').width;

export default function ModalFecha({ fecha, setFecha, modalVisible, setModalVisible }) {
    const [fechaModal, setFechaModal] = useState(fecha);

    useEffect(() => {
        setFechaModal(fecha);
      }, [fecha]);

    const seleccionar = () => {
        setFecha(fechaModal);
        setModalVisible(false);
    }

    const cancelar = () => {
        setModalVisible(!modalVisible);
        setFechaModal(fecha);
        setModalVisible(false);
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || fechaModal;
        setFechaModal(currentDate);
    }

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
                        <Text style={styles.modalHeaderTxt}>Fecha</Text>
                    </View>
                    <View>
                        <DateTimePicker style={styles.modalPicker}
                            testID="dateTimePicker"
                            value={fechaModal}
                            mode='date'
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    </View>
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