import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Selector from './selector';
import InputModal from './inputModal';
import InputTxtBox from './inputTxtBox';
import Row2Botones from './row2Botones';
import HeaderMovimiento from './headerMovimiento';
import Constants from 'expo-constants';

let fullWidth = Dimensions.get('window').width; //full width
const opAgregar = {
    disabled: false,
    subtitulo: "Agregar",
    label2: "Borrar"
}
const opEditar = {
    disabled: true,
    subtitulo: "Editar",
    label2: "Restablecer"
}
export default function Formulario({ navigation, movimiento }) {

    const [color, setColor] = useState('');
    const [tipo, setTipo] = useState(movimiento.tipo);
    const [monto, setMonto] = useState(movimiento.monto);
    const [descripcion, setDescripcion] = useState(movimiento.descripcion);
    const [fecha, setFecha] = useState(movimiento.fecha);
    const [categoria, setCategoria] = useState(movimiento.categoria);
    const [opciones, setOpciones] = useState(opAgregar);

    useEffect(() => {
        console.log(movimiento._id)
        if (movimiento._id){
            setOpciones(opEditar)
        }
    }, [movimiento])


    useEffect(() => {
        if (tipo === 'ingreso') {
            setColor('rgb(0,125,0)')
        } else {
            setColor('rgb(255,0,0)')
        }
    }, [tipo])


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
        setOpciones(opAgregar)
    }

    const reset = () => {
        setMonto(movimiento.monto);
        setDescripcion(movimiento.descripcion);
        setFecha(movimiento.fecha);
        setCategoria(movimiento.categoria);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <HeaderMovimiento />
                <View style={styles.bigContainer}>
                    <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
                    <Selector onPressAction={setTipo} color={color} posicion={tipo === 'gasto' ? 0 : 1} disabled={opciones.disabled} />
                    <InputTxtBox label="Monto" setValue={setMonto} value={monto} keyboardType='numeric' />
                    <InputTxtBox label="Descripción" setValue={setDescripcion} value={descripcion} />
                    <InputModal label="Categoría" value={categoria} setValue={setCategoria} />
                    <InputModal label="Fecha" value={fecha} setValue={setFecha} />
                    <Row2Botones label1="Guardar" action1={guardar} label2={opciones.label2} action2={reset} />
                </View>
            </View >
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: Constants.statusBarHeight
    },
    bigContainer: {
        flex: 1,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        width: fullWidth,
    },
    subtitulo: {
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10
    }
});