import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import FooterHome from './components/footerHome';
import MovRow from './components/movRow';



export default function Home({ navigation }) {

    const movimientos = [{ "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" }, { "_id": "5f920229f5810edd5d9ab0b8", "idUsuario": "1", "monto": 1000, "fecha": "2020-10-20T03:00:00.000Z", "descripcion": "La Empresa SA", "categoria": "Sueldo" }, { "_id": "5f920174f5810edd5d9ab0b7", "idUsuario": "10", "monto": -101, "fecha": "2020-10-20T03:00:00.000Z", "fechaImputacion": "2020-10-20T03:00:00.000Z", "descripcion": "Alfajores", "categoria": "Comida", "tipoPago": "Contado" },];
    const dateFormated = (fecha) => {return fecha.substring(0, 10)};
    const renderItem = ({ item }) => (<MovRow fecha={dateFormated(item.fecha)} monto={item.monto} />)

    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>
                <Text style={styles.txt20}>Gastos $4543 | Ingresos $4534</Text>
                <Text style={styles.txt30}>Últimos movimientos</Text>
                <FlatList style={styles.flatlist}
                    data={movimientos.slice(0,17)}
                    renderItem={renderItem}
                    keyExtractor={item => item.__id}
                />
                <Text>Ver más</Text>
            </View>
            <FooterHome navigation={navigation} />
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
    footerContainer: {
        justifyContent: 'flex-end',
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
