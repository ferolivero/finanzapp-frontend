import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import Formulario from './components/formulario';

export default function Editar({ navigation, route }) {

    const [isReady, setIsReady] = useState(false);
    //const [mov, setMov] = useState(null);
    const API_URL = 'https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read';

    useEffect(() => {
        buscarMovimiento();
    }, [route.params.id])

    function buscarMovimiento() {
        console.log("hola", route.params.id);
        fetch(API_URL)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setIsReady(true)
                //setMov(data);
            }
            )
    }

    const mov = { _id: route.params.id, tipo: 'ingreso', monto: route.params.id, descripcion: 'Chocolate', fecha: new Date(Date.now()), categoria: 'Comida' };
    return (
        <>{
            (isReady) ?
                <Formulario navigation={navigation} movimiento={mov} />
                :
                <View style={styles.container}>
                    <ActivityIndicator size="large" />
                </View>

        }</>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});
