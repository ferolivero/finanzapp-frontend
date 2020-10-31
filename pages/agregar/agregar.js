import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Selector from './components/selector';
import { Dimensions } from "react-native";
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
            <View style={styles.row}><Text>{fecha.toDateString()}</Text>
                <TouchableOpacity  style={{borderWidth:1}} onPress={mostrarDatePicker}>
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
        paddingLeft:30,
        paddingRight:30,
        width: fullWidth,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 10,
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