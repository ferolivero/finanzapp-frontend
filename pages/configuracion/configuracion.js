
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Dimensions, Button } from "react-native";
import HeaderConfiguracion from "./components/headerConfiguracion";
import InputModal from './components/inputModal';
import InputTxtBox from './../../global-components/inputTxtBox';
import Row2Botones from '../../global-components/row2Botones';
import Constants from "expo-constants";

let fullWidth = Dimensions.get('window').width; //full width

export default function Config({ navigation, onLogout }) {

    const [user, setUser] = useState({})
    const [nombre, setNombre] = useState('');
    const [moneda, setMoneda] = useState('');
    useEffect(()=>{
        //busco el user de mongo
        setUser({_id: "algo@gmail.com", nombre: "Juan Carlos Pérez", moneda: "$"});
    }, []);

    useEffect(()=>{
        reset();
    }, [user]);

    const guardar = () => {

    }

    const reset = () => {
        setNombre(user.nombre);
        setMoneda(user.moneda);
    }


  return (
    <View style={styles.container}>
      <HeaderConfiguracion />
      <View style={styles.bigContainer}>

        <Text style={styles.subtitulo}>{`${user._id}`.toUpperCase()}</Text>
        <InputTxtBox label="Nombre" setValue={setNombre} value={nombre} />
        <InputModal
          label="Moneda"
          value={moneda}
          setValue={setMoneda}
        />
        <Row2Botones label1="Guardar" action1={guardar} label2="Restablecer" action2={reset} />
        <Button onPress={onLogout} title="Deslogearse"></Button>
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
    marginTop: Constants.statusBarHeight,
  },
  bigContainer: {
    flex: 1,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    width: fullWidth,
  },
  flatlist: {
    alignSelf: "center",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10,
  },
});
