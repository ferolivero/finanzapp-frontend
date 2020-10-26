import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import FooterHome from './components/footerHome';
import HeaderHome from './components/headerHome';

export default function Home({navigation}) {
    return (
        <View style={styles.container}>
            <HeaderHome />
            <Text>Home</Text>
            <FooterHome navigation={navigation}/>
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
