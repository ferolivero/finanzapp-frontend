import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Constants from 'expo-constants';
import Page from './../../global-components/page.js';


export default function Agregar({navigation}) {
    return (
        <Page
        txtHeader="Agregar"
        txtLeft="I"
        onPressLeft={() => { console.log("Informes") }}
        imgCenter={require('./btnHome.png')}
        onPressCenter={() => { navigation.navigate('Home') }}
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
