import React from 'react';
import { StyleSheet, View, Button, StatusBar } from 'react-native';
import BtnRedondo from './btnRedondo';

export default function Footer({ txtLeft, onPressLeft, imgCenter, onPressCenter, txtRight, onPressRight }) {

    return (
        <View style={styles.footerWrapper}>
            <View style={styles.btnLeft}><Button title={txtLeft} onPress={onPressLeft}/></View>
            <BtnRedondo img={imgCenter} onPressAction={onPressCenter} />
            <View style={styles.btnRight}><Button title={txtRight} onPress={onPressRight}/></View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    btnRight: {
        width: 125,
        marginTop: 30,
        paddingRight: 5,
        paddingLeft: 5,
        borderTopWidth: 1,
        borderRightWidth: 1
    },
    btnLeft: {
        width: 125,
        marginTop: 30,
        paddingRight: 5,
        paddingLeft: 5,
        borderTopWidth: 1,
        borderLeftWidth: 1
    },
    footerWrapper: { 
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'flex-end',
      },
});