import React, { useEffect, useState } from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from "react-native-chart-kit";
import getApiClient from '../../../api/ApiClient'
import { useFocusEffect } from '@react-navigation/native'
let fullWidth = Dimensions.get('window').width - 40; //full width

export default function Informes({ tipo }) {



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
        await api.get(`informe/${tipo}/ultimos-seis-meses`).then((response) => {
          setData(response.data)
        })
      }
    
      useFocusEffect(
        React.useCallback(() => {
          console.debug('screen takes focus')
          getData()
          return () => console.debug('screen loses focus')
        }, [tipo])
      )
    const chartConfig = {
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
            borderRadius: 0
        },
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#222"
        }
    }
    return (

        <LineChart
            data={data}
            width={fullWidth} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
                marginVertical: 8,
                borderRadius: 0
            }}
        />
    );
}