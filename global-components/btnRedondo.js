
import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
export default function BtnRedondo({ img, onPressAction }) {

    return (
        <View>
            <TouchableOpacity
                activeOpacity={.8}
                onPress={onPressAction}
                style={styles.btnRedondo}
            >
                <View style={styles.txtCenter}>
                    <Image style={styles.imgBtn} source={img} />
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
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: (90 / 2),
        borderWidth: 1,
        width: 90,
        height: 90,
    },
    imgBtn: {
        width: 70,
        height: 70
    }
});