import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, Modal, Button } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Selector from './components/selector';
let fullWidth = Dimensions.get('window').width; //full width

export default function Agregar({ navigation }) {
    const [color, setColor] = useState('rgb(255,0,0)');
    const [tipo, setTipo] = useState('g');
    const [fecha, setFecha] = useState(new Date(Date.now()));
    const [categoria, setCategoria] = useState("Comida");

    useEffect(() => {
        if (tipo === 'i') {
            setColor('rgb(0,125,0)')
        } else {
            setColor('rgb(255,0,0)')
        }
    }, [tipo])


    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const mostrarDatePicker = () => {
        setDatePickerVisible(true);
    };

    const ocultarDatePicker = () => {
        setDatePickerVisible(false);
    };

    const confirmarFecha = date => {
        setFecha(date);
        ocultarDatePicker();
    };

    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <Selector
                    onPressAction={setTipo}
                    color={color}
                />
                <Text>Monto</Text>
                <TextInput style={{ borderWidth: 1 }} />
                <Text>Descripcion</Text>
                <TextInput style={{ borderWidth: 1 }} />
                <Text>Fecha</Text>
                <View style={styles.row}>
                    <Text style={styles.rowItem80}>{fecha.toDateString()}</Text>
                    <TouchableOpacity style={styles.rowItem20} onPress={mostrarDatePicker}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={datePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={ocultarDatePicker}
                        isDarkModeEnabled={false}
                        headerTextIOS='Fecha'
                        cancelTextIOS='Cancelar'
                        confirmTextIOS='Seleccionar'
                    />
                </View>
                <Text>Categoría</Text>
                <View style={styles.row}>
                    <Text style={styles.rowItem80}>{categoria}</Text>
                    <TouchableOpacity style={styles.rowItem20} onPress={() => {
                        setModalVisible(true)
                    }}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <Modal style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 0
                    }}
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(true);
                        }}>
                        <View style={styles.modalView}>
                            <Text>Modal</Text>
                            <Button title={"chau"}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            />
                        </View>
                    </Modal>
                </View>
                <View style={styles.row}>
                    <Button title="Guardar"/>
                    <Button title="Borrar"/>
                </View>
            </View>
            <FooterAgregar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    bigContainer: {
        flex: 1,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        width: fullWidth,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    rowItem80: {
        flexDirection: 'column',
        borderWidth: 1,
        flex: 4
    },
    rowItem20: {
        flexDirection: 'column',
        borderWidth: 1,
        flex: 1
    },
    txt20: {
        textAlign: 'center',
        fontSize: 25,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'absolute',
        bottom: 0,
        width: fullWidth - 40
    }
});