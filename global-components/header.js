
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Header({ txt }) {

    return (
        <Text style={styles.headerWrapper}>{txt}</Text>
    );
}

const styles = StyleSheet.create({
    headerWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        fontSize: 30
    },
});