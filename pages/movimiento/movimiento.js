import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard, Text } from 'react-native';
import FooterMovimiento from './components/footerMovimiento';
import Selector from './components/selector';
import InputModal from './components/inputModal';
import InputTxtBox from './components/inputTxtBox';
import Row2Botones from './components/row2Botones';


let fullWidth = Dimensions.get('window').width; //full width

export default function Movimiento({ navigation, route }) {

    console.log(route)
    const id = (route.params) ? route.params.id : null;
    let movimiento = null;
    if (id) {
        movimiento = { _id: route.params.id, tipo: 'ingreso', monto: 200, descripcion: 'Chocolate', fecha: new Date(Date.now()), categoria: "Comida" }
    }
    console.log(Boolean(id))
    const [color, setColor] = useState('');
    const [tipo, setTipo] = useState((movimiento) ? movimiento.tipo : 'gasto');
    const [monto, setMonto] = useState((movimiento) ? movimiento.monto : '');
    const [descripcion, setDescripcion] = useState((movimiento) ? movimiento.descripcion : '');
    const [fecha, setFecha] = useState((movimiento) ? movimiento.fecha : new Date(Date.now()));
    const [categoria, setCategoria] = useState((movimiento) ? movimiento.categoria : "Otros");


    useEffect(() => {
        if (tipo === 'ingreso') {
            setColor('rgb(0,125,0)')
        } else {
            setColor('rgb(255,0,0)')
        }
    }, [tipo])

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
                    <Text style={styles.subtitulo}>{id ? "Editar" : "Agregar"}</Text>
                    <Selector onPressAction={setTipo} color={color} posicion={tipo === 'gasto' ? 0 : 1} disabled={Boolean(id)} />
                    <InputTxtBox label="Monto" setValue={setMonto} value={monto} keyboardType='numeric' />
                    <InputTxtBox label="Descripción" setValue={setDescripcion} value={descripcion} />
                    <InputModal label="Categoría" value={categoria} setValue={setCategoria} />
                    <InputModal label="Fecha" value={fecha} setValue={setFecha} />
                    <Row2Botones label1="Guardar" action1={guardar} label2="Borrar" action2={borrar} />
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