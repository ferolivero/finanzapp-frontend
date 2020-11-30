import { useFocusEffect } from '@react-navigation/native'
import Constants from 'expo-constants'
import React, { useState, useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import getApiClient from '../../api/ApiClient'
import Loader from '../../global-components/loader'
import Selector from '../../global-components/selector'
import GraficoSeisMeses from './components/graficoSeisMeses'
import GraficoCategorias from './components/graficoCategorias'
import HeaderInformes from './components/headerInformes'
import InputModalMesAnio from '../../global-components/inputModalMesAnio'

let fullWidth = Dimensions.get('window').width - 40 //full width

export default function Informes() {
  const [loading, setLoading] = useState(true)
  const [tipo, setTipo] = useState('gasto')
  const [dataSeisMeses, setDataSeisMeses] = useState()
  const [dataCategorias, setDataCategorias] = useState()
  const [color, setColor] = useState('')
  const [mes, setMes] = useState(new Date().getMonth() + 1)
  const [anio, setAnio] = useState(new Date().getFullYear())

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

useEffect(()=>{
  getInformesCategorias(tipo)
}, [mes, anio])

  const getInformes = async (tipoInforme) => {
    setLoading(true)
    const api = await getApiClient()
    await api
      .get(`/informe/${tipoInforme}/ultimos-seis-meses`)
      .then((response) => {
        setDataSeisMeses(response.data)
      })
      .catch((err) => console.log(err.message))
    await api
      .get(`/informe/${tipoInforme}/${anio}-${mes}`)
      .then((response) => {
        setDataCategorias(response.data)
        setLoading(false)
      })
      .catch((err) => console.log(err.message))
  }


  const getInformesCategorias = async (tipoInforme) => {
    setLoading(true)
    const api = await getApiClient()
    await api
      .get(`/informe/${tipoInforme}/${anio}-${mes}`)
      .then((response) => {
        setDataCategorias(response.data)
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
              <GraficoSeisMeses tipo={tipo} data={dataSeisMeses} />
              <InputModalMesAnio
                label="Por categoría"
                mes={mes}
                setMes={setMes}
                anio={anio}
                setAnio={setAnio}
              />
              <GraficoCategorias data={dataCategorias} />
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
