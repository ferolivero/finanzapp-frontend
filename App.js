import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import BtnRedondo from './components/home/btnRedondo'

export default function App() {

  return (
    <View style={styles.container}>
      <Text styles={styles.txtGrande}>Open up App.js to start working on your app!</Text>
      <View style={styles.footerWrapper}>
      <View style={styles.btnAncho}><Button title="Informes" /></View>
      <BtnRedondo />
      <View style={styles.btnAncho}><Button title="Config" /></View>
      </View>
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
  },
  txtCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtGrande: {
    fontFamily: 'Helvetica',
    fontSize: 60,
  },
  footerWrapper: {
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
    position: 'absolute',
    bottom: 10,

  },
  btnAncho: {
    width: 125,
    marginTop:30,
    paddingRight:5,
    paddingLeft:5,
    borderTopWidth: 1
  },
});
