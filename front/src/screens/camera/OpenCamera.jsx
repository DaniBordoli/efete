import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Modal,
  Image,
  StyleSheet,
} from "react-native";
import { Camera } from "expo-camera";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { headerColor, buttonColor } from "../../Common/constans";
export default ({
  hasPermission,
  camRef,
  tomaFoto,
  capturarFoto,
  open,
  handleClose,
  handleConfirm,
  guardarFoto,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={camRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        ></View>
        <TouchableOpacity style={style.buttonCamara} onPress={() => tomaFoto()}>
          <FontAwesome name="camera" size={30} color={"white"} />
        </TouchableOpacity>
      </Camera>

      {capturarFoto && (
        <Modal
          animationType="fade"
          transparent={false}
          visible={open}
          statusBarTranslucent={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "black",
                width: "100%",
                height: "90%",
                justifyContent: "center",
              }}
            >
              <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <TouchableOpacity
                  style={{
                    justifyContent: "flex-end",
                    marginRight: 10,
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    handleClose();
                  }}
                >
                  <MaterialCommunityIcons
                    name="close"
                    size={45}
                    color="#DD1919"
                  />
                </TouchableOpacity>
              </View>
              <Image
                style={{
                  width: "100%",
                  height: "70%",
                  borderRadius: 5,
                  alignSelf: "center",
                }}
                source={{ uri: capturarFoto }}
              />

              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity
                  style={style.button}
                  onPress={() => {
                    //guardarFoto();
                    handleConfirm();
                  }}
                >
                  <MaterialCommunityIcons
                    name="upload"
                    size={35}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  buttonCamara: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: buttonColor,
    width: 75,
    height: 75,
    borderRadius: 60,
    marginBottom: 15,
    alignSelf: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: buttonColor,
    width: 75,
    height: 75,
    borderRadius: 60,
    marginTop: 10,
  },
});
