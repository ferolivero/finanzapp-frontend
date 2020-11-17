import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
let fullWidth = Dimensions.get("window").width - 40; //full width

export default function Informes({ tipo, mes, anio }) {
  //const [data, setData] = useState([])

  useEffect(() => {
    //traigo la data
    //setData(data)
  }, [tipo, mes, anio]);

  const data = {
    labels: ["Comida", "Vivienda", "Ocio", "Otros"],
    datasets: [
      {
        data: [20, 45, 28, 80],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: "#ffffff",
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 0,
    },
  };
  return (
    <BarChart
      data={data}
      width={fullWidth}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
    />
  );
}
