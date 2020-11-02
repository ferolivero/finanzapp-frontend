import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions, Button, Picker, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Selector from './components/selector';
import ModalCategorias from './components/modalCategorias';

let fullWidth = Dimensions.get('window').width; //full width

export default function Agregar({ navigation }) {
    const [color, setColor] = useState('rgb(255,0,0)');
    const [tipo, setTipo] = useState('gasto');
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState('');
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
    const borrar = () => {
        setFecha(new Date(Date.now()));
        setCategoria('Otros');
        setMonto('')
        setDescripcion('')
    }
    const guardar = () => {
        let mov = {
            tipo: tipo,
            monto: parseInt(monto),
            fecha: fecha,
            descripcion: descripcion,
            categoria: categoria,
        };
        if (mov.tipo === "gasto") {
            mov.fechaImputacion = mov.fecha;
            mov.tipoPago = "Contado";
        }
        console.log(mov);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.bigContainer}>
                    <Selector
                        onPressAction={setTipo}
                        color={color}
                    />
                    <Text>Monto</Text>
                    <TextInput style={styles.inputTxt} onChangeText={text => setMonto(text)} value={monto} keyboardType='numeric' />
                    <Text>Descripcion</Text>
                    <TextInput style={styles.inputTxt} onChangeText={text => setDescripcion(text)} value={descripcion} />
                    <Text>Fecha</Text>
                    <View style={styles.row}>
                        <View style={styles.rowItem80}>
                            <Text style={styles.inputTxt}>{fecha.toDateString()}</Text>
                        </View>
                        <TouchableOpacity style={styles.rowItem20} onPress={mostrarDatePicker}>
                            <Text style={styles.inputTxt}>Edit</Text>
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
                        <View style={styles.rowItem80}>

                            <Text style={styles.inputTxt}>{categoria}</Text></View>
                        <TouchableOpacity
                            style={styles.rowItem20}
                            onPress={() => { setModalVisible(true) }}
                        >
                            <Text style={styles.inputTxt}>Edit</Text>
                        </TouchableOpacity>
                        <ModalCategorias
                            categoria={categoria}
                            setCategoria={setCategoria}
                            modalVisible={modalVisible}
                            setModalVisible={setModalVisible} />
                    </View>
                    <View style={styles.row}>
                        <Button title="Guardar" onPress={guardar} />
                        <Button title="Borrar" onPress={borrar} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <FooterAgregar navigation={navigation} />
        </View >
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
        flex: 4
    },
    rowItem20: {
        flexDirection: 'column',
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
    inputTxt: {
        borderWidth: 1,
        fontSize: 25
    }
});