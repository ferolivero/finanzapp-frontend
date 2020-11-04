import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';
import FooterAgregar from './components/footerAgregar';
import Selector from './components/selector';
import InputModal from './components/inputModal';
import InputTxtBox from './components/inputTxtBox';
import Row2Botones from './components/row2Botones';


let fullWidth = Dimensions.get('window').width; //full width

export default function Agregar({ navigation }) {
    const [color, setColor] = useState('rgb(255,0,0)');
    const [tipo, setTipo] = useState('gasto');
    const [monto, setMonto] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState(new Date(Date.now()));
    const [categoria, setCategoria] = useState("Comida");


    useEffect(() => {
        if (tipo === 'ingreso') {
            setColor('rgb(0,125,0)')
        } else {
            setColor('rgb(255,0,0)')
        }
    }, [tipo])

    const [modalCategoriasVisible, setModalCategoriasVisible] = useState(false);
    const [modalFechaVisible, setModalFechaVisible] = useState(false);

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
                    <Selector onPressAction={setTipo} color={color} />
                    <InputTxtBox label="Monto" setValue={setMonto} value={monto} keyboardType = 'numeric'/>
                    <InputTxtBox label="Descripción" setValue={setDescripcion} value={descripcion} />
                    <InputModal label="Categoría" value={categoria} setValue={setCategoria} />   
                    <InputModal label="Fecha" value={fecha} setValue={setFecha} />   
                    <Row2Botones label1="Guardar" action1={guardar} label2="Borrar" action2={borrar} />
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
    }
});