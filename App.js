import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import BtnRedondo from './global-components/btnRedondo'
import Home from './pages/home/home.js';

export default function App() {

  return (
    <Home />
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
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,

  },
  headerWrapper: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    fontSize: 30
  },
  btnAncho: {
    width: 125,
    marginTop: 30,
    paddingRight: 5,
    paddingLeft: 5,
    borderTopWidth: 1
  },
});
