
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function BtnRedondo({ text, onPressAction }) {

    return (
        <View>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={onPressAction}
                style={styles.btnRedondo}
            >
                <View style={styles.txtCenter}>
                    <Text>{text}</Text>
                </View>
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
    btnRedondo: {
        backgroundColor: 'rgba(20,174,255,0.51)',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: (90 / 2),
        width: 90,
        height: 90,
    },
});