import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, Modal, Picker } from 'react-native';
import Row2Botones from '../../../global-components/row2Botones';
import ModalHeader from '../../../global-components/modalHeader';

let fullWidth = Dimensions.get('window').width;

export default function ModalPropio({ mes, setMes, anio, setAnio, modalVisible, setModalVisible }) {

    const [mesModal, setMesModal] = useState(mes);
    const [anioModal, setAnioModal] = useState(anio);

    useEffect(() => {
        setMesModal(mes);
    }, [mes]);

    useEffect(() => {
        setAnioModal(anio);
    }, [anio]);

    const seleccionar = () => {
        setMes(mesModal);
        setAnio(anioModal);
        setModalVisible(false);
    }

    const cancelar = () => {
        setMesModal(mes);
        setAnioModal(anio);
        setModalVisible(false);
    }

    const onChangeMes = (selectedItem) => {
        const currentItem = selectedItem || mesModal;
        setMesModal(currentItem);
    }

    const onChangeAnio = (selectedItem) => {
        const currentItem = selectedItem || anioModal;
        setAnioModal(currentItem);
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
                    <ModalHeader texto="Mes" />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        <Picker
                            selectedValue={mesModal}
                            style={styles.modalPicker}
                            onValueChange={onChangeMes}>
                            <Picker.Item key={'1'} label={"Enero"} value={"Enero"} />
                            <Picker.Item key={'2'} label={"Febrero"} value={"Febrero"} />
                            <Picker.Item key={'3'} label={"Marzo"} value={"Marzo"} />
                            <Picker.Item key={'4'} label={"Abril"} value={"Abril"} />
                        </Picker>
                        <Picker
                            selectedValue={anioModal}
                            style={styles.modalPicker}
                            onValueChange={onChangeAnio}>
                            <Picker.Item key={'10'} label={"2018"} value={"2018"} />
                            <Picker.Item key={'20'} label={"2019"} value={"2019"} />
                            <Picker.Item key={'30'} label={"2020"} value={"2020"} />
                            <Picker.Item key={'40'} label={"2021"} value={"2021"} />
                        </Picker>


                    </View>
                    <Row2Botones label1="Seleccionar" action1={seleccionar} label2="Cancelar" action2={cancelar} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
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