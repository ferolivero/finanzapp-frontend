import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import SwitchSelector from "react-native-switch-selector";
import DateTimePickerModal from "react-native-modal-datetime-picker";


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


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = date => {
        setFecha(date);
        hideDatePicker();
    };


    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <SwitchSelector
                    initial={0}
                    selectedColor='rgb(255,255,255)'
                    onPress={value => setTipo(value)}
                    buttonColor={color}
                    borderColor='rgb(0,0,0)'
                    height={50}
                    fontSize={25}
                    backgroundColor={'#D3D3D3'}
                    hasPadding
                    options={[
                        { label: "Gasto", value: "g" },
                        { label: "Ingreso", value: "i" }
                    ]}
                />
            
            <View style={styles.row}><Text>{fecha.toDateString()}</Text>
                <TouchableOpacity  style={{borderWidth:1}} onPress={showDatePicker}>
                    <Text>Editar</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
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
        width: 300,
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