import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Footer from './footer.js';
import Header from './header.js';

export default function Page(props) {
    return (
        <View style={styles.container}>
            <Header txt={props.txtHeader}/>
            <Footer 
                txtLeft={props.txtLeft}
                onPressLeft={props.onPressLeft}
                imgCenter={props.imgCenter}
                onPressCenter={props.onPressCenter}
                txtRight={props.txtRight}
                onPressRight={props.onPressRight}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
