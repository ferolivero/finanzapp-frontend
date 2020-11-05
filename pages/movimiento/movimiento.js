import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import FooterMovimiento from './components/footerMovimiento';
import Selector from './components/selector';
import InputModal from './components/inputModal';
import InputTxtBox from './components/inputTxtBox';
import Row2Botones from './components/row2Botones';


let fullWidth = Dimensions.get('window').width; //full width

export default function Movimiento({ navigation, route }) {

    const id = (route.params) ? route.params.id : null;
    let opciones = {disabled: Boolean(id)};
    
    if (id) {
        opciones.movimiento = { _id: route.params.id, tipo: 'ingreso', monto: 200, descripcion: 'Chocolate', fecha: new Date(Date.now()), categoria: 'Comida' }
        opciones.subtitulo = "Editar";
        opciones.label2 = "Restablecer";
        opciones.reset = () => {
            setFecha(opciones.movimiento.fecha);
            setCategoria(opciones.movimiento.categoria);
            setMonto(opciones.movimiento.monto)
            setDescripcion(opciones.movimiento.descripcion)
        }
    } else {
        opciones.movimiento = { _id: null, tipo: 'gasto', monto: '', descripcion: '', fecha: new Date(Date.now()), categoria: 'Otros' }
        opciones.subtitulo = "Agregar";
        opciones.label2 = "Borrar";
        opciones.reset = () => {
            setFecha(new Date(Date.now()));
            setCategoria('Otros');
            setMonto('')
            setDescripcion('')
        }
    }

    const [color, setColor] = useState('');
    const [tipo, setTipo] = useState(opciones.movimiento.tipo);
    const [monto, setMonto] = useState(opciones.movimiento.monto);
    const [descripcion, setDescripcion] = useState(opciones.movimiento.descripcion);
    const [fecha, setFecha] = useState(opciones.movimiento.fecha);
    const [categoria, setCategoria] = useState(opciones.movimiento.categoria);


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
        console.log(mov);
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.bigContainer}>
                    <Text style={styles.subtitulo}>{opciones.subtitulo}</Text>
                    <Selector onPressAction={setTipo} color={color} posicion={tipo === 'gasto' ? 0 : 1} disabled={opciones.disabled} />
                    <InputTxtBox label="Monto" setValue={setMonto} value={monto} keyboardType='numeric' />
                    <InputTxtBox label="Descripción" setValue={setDescripcion} value={descripcion} />
                    <InputModal label="Categoría" value={categoria} setValue={setCategoria} />
                    <InputModal label="Fecha" value={fecha} setValue={setFecha} />
                    <Row2Botones label1="Guardar" action1={guardar} label2={opciones.label2} action2={opciones.reset} />
                </View>
            </TouchableWithoutFeedback>
            <FooterMovimiento navigation={navigation} />
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
    subtitulo: {
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 10
    }
});