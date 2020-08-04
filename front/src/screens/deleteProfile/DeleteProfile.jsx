import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from "react-native";
import { style } from "./style";

export default ({ navigation, handleSubmit }) => {
  return (
    <View style={style.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>
              Seguro desea ELIMINAR su cuenta?
            </Text>

            <TouchableHighlight
              style={{
                ...style.openButton,
                backgroundColor: "#00CC96",
              }}
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={style.textStyle}>Confirmar</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{
                ...style.openButton,
                backgroundColor: "#DD1919",
                marginTop: 10,
              }}
              onPress={() => {
                navigation.navigate("User");
              }}
            >
              <Text style={{ ...style.textStyle }}>Cancelar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};
