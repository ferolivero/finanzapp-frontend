
import React from 'react';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import BtnRedondoTxt from './btnRedondoTxt';
export default function BtnRedondo() {

    return (
        <View>
            <TouchableOpacity
                activeOpacity={.8} //The opacity of the button when it is pressed
                style={styles.btnRedondo}
            >
                <BtnRedondoTxt />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    txtCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtGrande: {
        fontFamily: 'Helvetica',
        fontSize: 160,
    },
    btnRedondo: {
        backgroundColor: 'rgba(20,174,255,0.51)',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: (90 / 2),
        width: 90,
        height: 90,
    },
});