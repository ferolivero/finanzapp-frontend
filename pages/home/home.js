import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import BotoneraFooterHome from './components/footerHome';
export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerWrapper}>Saldo del mes: + $4343</Text>
            <Text>Home</Text>
            <BotoneraFooterHome />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
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
