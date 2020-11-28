import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Header from '../../../global-components/header'
const mesActual = new Date()
const monthNames = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
]
export default function HeaderHome(props) {
  const getStyle = () => {
    if (props.ingresos > 0) {
      const porcentajeGastos = props.gastos / props.ingresos
      if (porcentajeGastos <= 0.5) return styles.green
      else if (porcentajeGastos <= 0.7 && porcentajeGastos > 0.5)
        return styles.naranja
      else if (porcentajeGastos > 0.7) return styles.red
    }
  }
  return (
    <>
      <Text style={{ fontSize: 30 }}>
        Balance {monthNames[mesActual.getMonth()]}
      </Text>
      <Text style={[styles.text, getStyle()]}>${props.balance}</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  green: {
    color: 'limegreen',
  },
  red: {
    color: 'darkred',
  },
  naranja: {
    color: 'coral',
  },
})
