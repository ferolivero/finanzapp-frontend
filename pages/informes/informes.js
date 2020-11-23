import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import HeaderInformes from './components/headerInformes'
import Selector from '../../global-components/selector'
import Constants from 'expo-constants'
import GraficoLineal from './components/graficoLineal'
import GraficoBarras from './components/graficoBarras'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'

let fullWidth = Dimensions.get('window').width - 40 //full width

export default function Informes({ navigation }) {
  const [tipo, setTipo] = useState('gasto')
  const [color, setColor] = useState('')
  const [mes, setMes] = useState(new Date().getMonth() + 1)
  const [anio, setAnio] = useState(new Date().getFullYear())

  useEffect(() => {
    if (tipo === 'ingreso') {
      setColor('rgb(0,125,0)')
    } else {
      setColor('rgb(255,0,0)')
    }
  }, [tipo])

  return (
      <View style={styles.container}>
        <HeaderInformes />
        <View style={styles.bigContainer}>
          <Selector
            onPressAction={setTipo}
            color={color}
            posicion={tipo === 'gasto' ? 0 : 1}
            disabled={false}
          />
                  <ScrollView>

          <GraficoLineal tipo={tipo} />
          <InputModalMesAnio
            label="Por categoría"
            mes={mes}
            setMes={setMes}
            anio={anio}
            setAnio={setAnio}
          />
          <GraficoBarras tipo={tipo} mes={mes} anio={anio} />
          </ScrollView>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: Constants.statusBarHeight,
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
  flatlist: {
    alignSelf: 'center',
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  modalPicker: {
    height: 200,
    width: fullWidth - 40,
  },
})
