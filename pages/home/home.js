import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Constants from 'expo-constants';
import Page from './../../global-components/page.js';
    const mesActual = new Date();
    const monthNames = ["enero", "febrero", "marzo", "abril", "mayo", "junio",
                        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    const txtHeader = `Balance ${monthNames[mesActual.getMonth()]}: $345`
export default function Home({navigation}) {
    return (
        <Page
        txtHeader={txtHeader}
        txtLeft="I"
        onPressLeft={() => { console.log("Informes") }}
        imgCenter={require('./btnAgregar.png')}
        onPressCenter={() => { navigation.navigate('Agregar') }}
        txtRight="C"
        onPressRight={() => { console.log("Config") }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        fontSize: 30
    },
});
