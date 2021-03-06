import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Modal, Picker } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Row2Botones from "../../../global-components/row2Botones";
import ModalHeader from "../../../global-components/modalHeader";

let fullWidth = Dimensions.get("window").width;

export default function ModalPropio({
  tipo,
  value,
  setValue,
  modalVisible,
  setModalVisible,
}) {
  const [valueModal, setValueModal] = useState(value);

  useEffect(() => {
    setValueModal(value);
  }, [value]);

  const seleccionar = () => {
    setValue(valueModal);
    setModalVisible(false);
  };

  const cancelar = () => {
    setModalVisible(!modalVisible);
    setValueModal(value);
    setModalVisible(false);
  };

  const onChangeMoneda = (selectedItem) => {
    const currentItem = selectedItem || valueModal;
    setValueModal(currentItem);
  };
  let monedas = [
    { key: 1, value: "$" },
    { key: 2, value: "€" },
    { key: 3, value: "u$s" },
    { key: 4, value: "£" },
    { key: 4, value: "¥" },
    { key: 4, value: "₩" },
    { key: 4, value: "R$" },
  ];

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
          <ModalHeader texto={tipo} />

          <Picker
            selectedValue={valueModal}
            style={styles.modalPicker}
            onValueChange={onChangeMoneda}
          >
            {monedas.map((item) => (
              <Picker.Item
                key={item.key}
                label={item.value}
                value={item.value}
              />
            ))}
          </Picker>

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
