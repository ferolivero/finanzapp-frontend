import React from 'react'
import { Dimensions, Platform } from 'react-native'
import { BarChart, LineChart } from 'react-native-chart-kit'

let fullWidth = Dimensions.get('window').width - 40 //full width

export default function GraficoCategorias({ data }) {
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
  if (Platform.OS === 'ios') {
    return (
      <BarChart
        data={data}
        width={fullWidth}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />
    )
  } else if (Platform.OS === 'android') {
    return (
      <LineChart
        data={data}
        width={fullWidth} // from react-native
        height={300}
        yAxisLabel="$"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 0,
        }}
      />
    )
  } else {
    return <></>
  }
}
