import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Header({ txt }) {
  return <Text style={styles.headerWrapper}>{txt}</Text>
}

const styles = StyleSheet.create({
  headerWrapper: {
    fontSize: 30,
  },
})
