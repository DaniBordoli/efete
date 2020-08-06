import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { style } from "./style";
import Modal from "react-native-modal";
import { rojo, buttonColor } from "../../Common/constans";

export default ({ navigation, handleSubmit }) => {
  return (
    <View style={style.centeredView}>
      <Modal
        isVisible={true}
        animationInTiming={800}
        animationOutTiming={1000}
        backdropTransitionInTiming={2000}
        backdropTransitionOutTiming={2000}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>
              Seguro desea ELIMINAR la cuenta?
            </Text>
            <View style={{ flexDirection: "row-reverse" }}>
              <TouchableHighlight
                style={{
                  ...style.openButton,
                  backgroundColor: rojo,
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
                  backgroundColor: "white",
                  borderWidth: 1,
                  borderColor: buttonColor,
                }}
                onPress={() => {
                  navigation.navigate("User");
                }}
              >
                <Text
                  style={{
                    ...style.textStyle,
                    color: buttonColor,
                  }}
                >
                  Cancelar
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
