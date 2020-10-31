import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function MovRow({ fecha, monto }) {

    let rowColor = (monto > 0) ? 'rgb(0,128,0)' : 'rgb(255,0,0)';

    return (
        <View style={styles.rowWrapper}>
            <View style={styles.rowWrapper2}>
            <View style={styles.col}><Text style={{ textAlign: 'left', fontSize: 20, color: rowColor, flex: 1 }}>{fecha}:</Text></View>
            <View style={styles.col}><Text style={{ textAlign: 'left', fontSize: 20, color: rowColor, flex: 1, marginLeft: 5 }}>Asado</Text></View>
            </View>
            <View style={styles.col}><Text style={{ textAlign: 'right', fontSize: 20, color: rowColor, flex: 1 }}>{monto}</Text></View>
            <View style={styles.col}><Text style={{ textAlign: 'right', fontSize: 20, color: rowColor, flex: 1, marginLeft: 5 }}>$</Text></View>

        </View>
    );
}

const styles = StyleSheet.create({
    rowWrapper: {
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
        // flexDirection: 'row',
        // //justifyContent: 'space-between',
        width: 290,
        // flex: 1
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rowWrapper2: {
        // flexWrap: 'wrap',
        // alignItems: 'flex-start',
        // flexDirection: 'row',
        // //justifyContent: 'space-between',
        width: 290,
        // flex: 1
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    col: {
        flexDirection: 'column',
    },
});