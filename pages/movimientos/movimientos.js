import React, {useState} from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Constants from "expo-constants";
import MovRow from "./components/movRow";
import InputModalMesAnio from "../../global-components/inputModalMesAnio";
import HeaderMovimientos from "./components/headerMovimientos";

export default function Movimientos({ navigation }) {
    
    const [mes, setMes] = useState("Enero");
    const [anio, setAnio] = useState("2020");
    const movimientos = [
    {
      _id: "1",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "2",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "3",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "4",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "5",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "6",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "7",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "8",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "9",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "10",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "11",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "12",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "13",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "14",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "15",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "16",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "17",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "18",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "19",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "20",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "21",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "22",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "23",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "24",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "25",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "26",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "27",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "28",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
    {
      _id: "29",
      idUsuario: "1",
      monto: 1000,
      fecha: "2020-10-20T03:00:00.000Z",
      descripcion: "La Empresa SA",
      categoria: "Sueldo",
    },
    {
      _id: "30",
      idUsuario: "10",
      monto: -101,
      fecha: "2020-10-20T03:00:00.000Z",
      fechaImputacion: "2020-10-20T03:00:00.000Z",
      descripcion: "Alfajores",
      categoria: "Comida",
      tipoPago: "Contado",
    },
  ];
  const dateFormated = (fecha) => {
    return fecha.substring(0, 10);
  };
  const renderItem = ({ item }) => (
    <MovRow
      id={item._id}
      fecha={dateFormated(item.fecha)}
      monto={item.monto}
      categoria={item.categoria}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <HeaderMovimientos />
      <View style={styles.bigContainer}>
        <InputModalMesAnio
          label="Mes"
          mes={mes}
          setMes={setMes}
          anio={anio}
          setAnio={setAnio}
        />
        <FlatList
          style={styles.flatlist}
          data={movimientos}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Constants.statusBarHeight,
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
  },
  flatlist: {
    alignSelf: "center",
  },
  txt20: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 20,
  },
  txt30: {
    textAlign: "center",
    fontSize: 30,
  },
});
