import React from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import FooterMovimientos from './components/footerMovimientos';
import MovRow from './components/movRow';



export default function Movimientos({ navigation }) {

    const movimientos = [{ "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" },];
    const dateFormated = (fecha) => { return fecha.substring(0, 10) };
    const renderItem = ({ item }) => (<MovRow id={item._id} fecha={dateFormated(item.fecha)} monto={item.monto} categoria={item.categoria} navigation={navigation} />)

    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <FlatList style={styles.flatlist}
                    data={movimientos}
                    renderItem={renderItem}
                    keyExtractor={item => item.__id}
                />
            </View>
            <Button title="Agregar movimiento" onPress={() => { navigation.navigate('Movimiento') }} />
            <FooterMovimientos navigation={navigation} />
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
