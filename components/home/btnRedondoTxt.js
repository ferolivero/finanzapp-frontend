
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native';

export default function BtnRedondoTxt() {

    return (

        <View style={styles.txtCenter}>
          <Text styles={styles.txtGrande}>H</Text>
        </View>

);
}

const styles = StyleSheet.create({
    txtCenter: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 160,

    },
    txtGrande: {
      fontFamily: 'Helvetica',
      fontSize: 160,
    },
  });