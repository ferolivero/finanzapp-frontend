import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from '../../global-components/loader'
import Selector from '../../global-components/selector'
import GraficoLineal from './components/graficoLineal'
import HeaderInformes from './components/headerInformes'

let fullWidth = Dimensions.get('window').width - 40 //full width

export default function Informes() {
  const [loading, setLoading] = useState(true)
  const [tipo, setTipo] = useState('gasto')
  const [data, setData] = useState()
  const [color, setColor] = useState('')

  useFocusEffect(
    React.useCallback(() => {
      console.log('Desde useEffect')
      console.debug('screen takes focus')
      if (tipo === 'ingreso') {
        setColor('rgb(0,125,0)')
      } else {
        setColor('rgb(255,0,0)')
      }
      getInformes(tipo)
      return () => console.debug('screen loses focus')
    }, [tipo])
  )

  const getInformes = async (tipoInforme) => {
    setLoading(true)
    const api = await getApiClient()
    await api
      .get(`/informe/${tipoInforme}/ultimos-seis-meses`)
      .then((response) => {
        setData(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }

  return (
    <>
      {!loading ? (
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
              <GraficoLineal tipo={tipo} data={data} />
              {/* <InputModalMesAnio
            label="Por categoría"
            mes={mes}
            setMes={setMes}
            anio={anio}
            setAnio={setAnio}
          />
          <GraficoBarras tipo={tipo} mes={mes} anio={anio} /> */}
            </ScrollView>
          </View>
        </View>
      ) : (
        <Loader></Loader>
      )}
    </>
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
