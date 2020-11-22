import React from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'

export default function InputSwitch({ label, setValue, value }) {
  const toggleSwitch = () => setValue((previousState) => !previousState)

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}><Text>{label}</Text></View>
      <Switch
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 3
  },
  subcontainer: {
    justifyContent: 'center',
    marginRight: 2,
    paddingTop: 2
  },
})
