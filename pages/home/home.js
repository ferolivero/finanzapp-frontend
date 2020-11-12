import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import MovRow from './components/movRow';
import HeaderHome from './components/headerHome';
import Constants from 'expo-constants';

export default function Home({ navigation }) {

    const movimientos = [
        {
          _id: "1",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "2",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "3",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "4",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "5",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "6",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "7",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "8",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "9",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "10",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "11",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "12",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "13",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "14",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "15",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "16",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "17",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "18",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "19",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "20",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "21",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "22",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "23",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "24",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "25",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "26",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "27",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "28",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
        {
          _id: "29",
          idUsuario: "1",
          monto: 1000,
          fecha: "2020-10-20T03:00:00.000Z",
          descripcion: "La Empresa SA",
          categoria: "Sueldo",
        },
        {
          _id: "30",
          idUsuario: "10",
          monto: -101,
          fecha: "2020-10-20T03:00:00.000Z",
          fechaImputacion: "2020-10-20T03:00:00.000Z",
          descripcion: "Alfajores",
          categoria: "Comida",
          tipoPago: "Contado",
        },
      ];
    const dateFormated = (fecha) => {return fecha.substring(0, 10)};
    const renderItem = ({ item }) => (<MovRow fecha={dateFormated(item.fecha)} monto={item.monto} />)

    return (
        <View style={styles.container}>
            <HeaderHome />
            <View style={styles.bigContainer}>
                <Text style={styles.txt20}>Gastos $4543 | Ingresos $4534</Text>
                <Text style={styles.txt30}>Últimos movimientos</Text>
                <FlatList style={styles.flatlist}
                    data={movimientos.slice(0,17)}
                    renderItem={renderItem}
                    keyExtractor={item => item.__id}
                />
                <Button title="Ver más" onPress={() => { navigation.navigate('Movimientos') }} />
            </View>
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
        marginTop: Constants.statusBarHeight
    },
    bigContainer: {
        flex: 1,
        padding: 10,
        paddingTop: 0
    },
    flatlist: {
        alignSelf: 'center',
    },
    txt20: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    },
    txt30: {
        textAlign: 'center',
        fontSize: 30,
    }
});
