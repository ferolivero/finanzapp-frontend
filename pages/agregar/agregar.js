import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Selector from './components/selector';
let fullWidth = Dimensions.get('window').width; //full width

export default function Agregar({ navigation }) {
    const [color, setColor] = useState('rgb(255,0,0)');
    const [tipo, setTipo] = useState('g');
    const [fecha, setFecha] = useState(new Date(Date.now()));

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


    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <Selector
                    onPressAction={setTipo}
                    color={color}
                />
                
                <Text>Monto</Text>
                <TextInput style={{borderWidth: 1}} />
                <Text>Descripcion</Text>
                <TextInput style={{borderWidth: 1}} />
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
            </View>
            <FooterAgregar navigation={navigation} />
            <StatusBar style="auto" />
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
        borderWidth:1,
        flex: 4
    },
    rowItem20: {
        flexDirection: 'column',
        borderWidth:1,
        flex: 1
    },
    txt20: {
        textAlign: 'center',
        fontSize: 25,
    },
    centro: {
        width: 40,
        height: 40,
        backgroundColor: 'rgb(255,0,0)',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15
    }

});