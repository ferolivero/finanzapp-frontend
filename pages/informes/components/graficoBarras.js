import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import getApiClient from '../../../api/ApiClient'
import { useFocusEffect } from '@react-navigation/native'

let fullWidth = Dimensions.get('window').width - 40 //full width

export default function Informes({ tipo, mes, anio }) {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  })


  const getData = async () => {
    const api = await getApiClient()
    await api.get(`informe/${tipo}/${anio}-${mes}`).then((response) => {
      setData(response.data)
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      console.debug('screen takes focus')
      getData()
      return () => console.debug('screen loses focus')
    }, [tipo, mes, anio])
  )

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 0,
    },
  }
  return (
    <BarChart
      data={data}
      width={fullWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
    />
  )
}
