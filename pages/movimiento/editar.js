import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import Selector from './components/selector';
import InputModal from './components/inputModal';
import InputTxtBox from './components/inputTxtBox';
import Row2Botones from './components/row2Botones';
import HeaderMovimiento from './components/headerMovimiento';
import Constants from 'expo-constants';

let fullWidth = Dimensions.get('window').width; //full width
let opsDefault = {
    disabled: false,
    movimiento: { _id: null, tipo: 'gasto', monto: '', descripcion: '', fecha: new Date(Date.now()), categoria: 'Otros' },
    subtitulo: "Agregar",
    label2: "Borrar"
}

export default function Movimiento({ navigation, route }) {
    
    const [color, setColor] = useState('');
    const [tipo, setTipo] = useState(opsDefault.movimiento.tipo);
    const [monto, setMonto] = useState(opsDefault.movimiento.monto);
    const [descripcion, setDescripcion] = useState(opsDefault.movimiento.descripcion);
    const [fecha, setFecha] = useState(opsDefault.movimiento.fecha);
    const [categoria, setCategoria] = useState(opsDefault.movimiento.categoria);
    const [opciones, setOpciones] = useState(opsDefault);






        useEffect(() => {
            setOpciones({
                disabled: true,
                movimiento: { _id: route.params.id, tipo: 'ingreso', monto: route.params.id, descripcion: 'Chocolate', fecha: new Date(Date.now()), categoria: 'Comida' },
                subtitulo: "Editar",
                label2: "Restablecer"
            })
            console.log(route.params.id)
            reset()
        }, [route.params.id])



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
        console.log(opciones.movimiento._id);
        setOpciones(opsDefault)
    }

    const reset = () => {
        setMonto(opciones.movimiento.monto);
        setDescripcion(opciones.movimiento.descripcion);
        setFecha(opciones.movimiento.fecha);
        setCategoria(opciones.movimiento.categoria);
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