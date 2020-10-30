import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import FooterAgregar from './components/footerAgregar';

export default function Agregar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.bigContainer}>

            </View>
            <FooterAgregar navigation={navigation} />
            <StatusBar style="auto" />
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
});