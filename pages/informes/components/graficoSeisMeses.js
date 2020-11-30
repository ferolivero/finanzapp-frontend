import React from 'react'
import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
let fullWidth = Dimensions.get('window').width - 40 //full width

export default function Informes({ tipo, data }) {
  //   const data = {
  //     labels: ['Comida', 'Vivienda', 'Ocio', 'Otros'],
  //     datasets: [
  //       {
  //         data: [20, 45, 28, 80],
  //       },
  //     ],
  //   }
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 0,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#222',
    },
  }
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
}
