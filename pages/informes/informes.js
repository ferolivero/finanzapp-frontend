import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderInformes from './components/headerInformes';
import Constants from 'expo-constants';

export default function Informes({ navigation }) {

    return (
        <View style={styles.container}>
            <HeaderInformes />
            <View style={styles.bigContainer}>
                <Text style={styles.subtitulo}>Acá van los informes. Abajo debería tener algo para elegir los distintos informes</Text>
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
    subtitulo: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10
    }
});
