import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function InputTxtBox({label, setValue, value, keyboardType = 'default' }) {

    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={styles.inputTxt} onChangeText={text => setValue(text)} value={value} keyboardType={keyboardType} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputTxt: {
        borderWidth: 1,
        fontSize: 25
    }
});