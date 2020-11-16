import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Modal, Picker } from "react-native";
import Row2Botones from "./row2Botones";
import ModalHeader from "./modalHeader";

let fullWidth = Dimensions.get("window").width;

export default function ModalMesAnio({
  mes,
  setMes,
  anio,
  setAnio,
  modalVisible,
  setModalVisible,
}) {
  const mesesEsp = [
    { key: 1, value: "Enero" },
    { key: 2, value: "Febrero" },
    { key: 3, value: "Marzo" },
    { key: 4, value: "Abril" },
    { key: 5, value: "Mayo" },
    { key: 6, value: "Junio" },
    { key: 7, value: "Julio" },
    { key: 8, value: "Agosto" },
    { key: 9, value: "Septiembre" },
    { key: 10, value: "Octubre" },
    { key: 11, value: "Noviembre" },
    { key: 12, value: "Diciembre" },
  ];
  const [mesModal, setMesModal] = useState(mes);
  const [anioModal, setAnioModal] = useState(anio);
  const [meses, setMeses] = useState(mesesEsp);
  const [anios, setAnios] = useState([]);

  useEffect(() => {
    setMesModal(mes);
  }, [mes]);

  useEffect(() => {
    setAnioModal(anio);
  }, [anio]);

  const seleccionar = () => {
    setMes(mesModal);
    setAnio(anioModal);
    setModalVisible(false);
  };

  const cancelar = () => {
    setMesModal(mes);
    setAnioModal(anio);
    setModalVisible(false);
  };

  const onChangeMes = (selectedItem) => {
    const currentItem = selectedItem || mesModal;
    setMesModal(currentItem);
  };

  const onChangeAnio = (selectedItem) => {
    const currentItem = selectedItem || anioModal;
    setAnioModal(currentItem);
  };

  useEffect(() => {
    //getMesInicial
    const mesInicial = "2018-08";
    setearPickers(mesInicial);
  }, []);

  const setearPickers = (mesInicial) => {
    let miAnioInicial = mesInicial.split("-")[0];
    let miMesInicial = mesInicial.split("-")[1];
    let anioActual = new Date();
    anioActual = anioActual.getFullYear();
    let misAnios = [{ key: miAnioInicial, value: miAnioInicial }];
    if (miAnioInicial === anioActual) {
      //tomar desde el mes inicial hasta el actual
      //setMeses();
    } else {
      setMeses(mesesEsp);
      for (let i = miAnioInicial; i <= anioActual; i++) {
        misAnios.push({ key: i, value: i });
      }
    }
    setAnios(misAnios);
  };

  return (
    <View>
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
      >
        <View style={styles.modalView}>
          <ModalHeader texto="Mes" />
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Picker
              selectedValue={mesModal}
              style={styles.modalPicker}
              onValueChange={onChangeMes}
            >
              {meses.map((item) => (
                <Picker.Item
                  key={item.key}
                  label={item.value}
                  value={item.value}
                />
              ))}
            </Picker>
            <Picker
              selectedValue={anioModal}
              style={styles.modalPicker}
              onValueChange={onChangeAnio}
            >
              {anios.map((item) => (
                <Picker.Item
                  key={item.key}
                  label={item.value.toString()}
                  value={item.value.toString()}
                />
              ))}
            </Picker>
          </View>
          <Row2Botones
            label1="Seleccionar"
            action1={seleccionar}
            label2="Cancelar"
            action2={cancelar}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    bottom: 0,
    position: "absolute",
    bottom: 0,
    width: fullWidth - 40,
  },
  modalheader: {
    borderBottomWidth: 1,
    width: fullWidth - 40,
    alignItems: "center",
    paddingBottom: 15,
    borderBottomColor: "#D3D3D3",
  },
  modalHeaderTxt: {
    fontSize: 20,
    color: "#A9A9A9",
  },
  modalPicker: {
    height: 200,
    width: fullWidth - 40,
  },
});
