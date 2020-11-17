import React from 'react'
import Header from '../../../global-components/header'
const mesActual = new Date()
const monthNames = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]
const txtHeader = `Balance ${monthNames[mesActual.getMonth()]}: $345`
export default function HeaderHome() {
  return <Header txt={txtHeader} />
}
