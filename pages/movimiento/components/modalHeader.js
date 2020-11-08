import React from 'react';
import { StyleSheet, View, Text, Dimensions  } from 'react-native';

let fullWidth = Dimensions.get('window').width;

export default function modalHeader({ texto }) {
    return (
        <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTxt}>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    modalheader: {
        borderBottomWidth: 1,
        width: fullWidth - 40,
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#D3D3D3'
    },
    modalHeaderTxt: {
        fontSize: 20,
        color: '#A9A9A9'
    }
});