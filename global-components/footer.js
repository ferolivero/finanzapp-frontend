import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import BtnRedondo from './btnRedondo';

export default function BotoneraFooter({ txtLeft, onPressLeft, imgCenter, onPressCenter, txtRight, onPressRight }) {

    return (
        <View style={styles.footerWrapper}>
            <View style={styles.btnLeft}><Button title={txtLeft} onPress={onPressLeft}/></View>
            <BtnRedondo img={imgCenter} onPressAction={onPressCenter} />
            <View style={styles.btnRight}><Button title={txtRight} onPress={onPressRight}/></View>
        </View>
    );
}

const styles = StyleSheet.create({
    txtCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
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
        alignItems: 'flex-start',
        flexDirection:'row',
        position: 'absolute',
        bottom: 10,
      },
});