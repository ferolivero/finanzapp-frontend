import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default function Row2Botones({ label1, action1, label2, action2 }) {
    return (
        <View style={styles.row}>
            <Button title={label1} onPress={action1} />
            <Button title={label2} onPress={action2} />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});