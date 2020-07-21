import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Modal,
  Image,
} from "react-native";
import { Camera } from "expo-camera";

export default ({
  handleCamera,
  type,
  hasPermission,
  camRef,
  takePhoto,
  uri,
  open,
  handleClose,
  handleConfirm,
}) => {
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camRef} style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              handleCamera();
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <Button title="Tomar Foto" onPress={() => takePhoto()} />
      {uri && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View>
            <TouchableOpacity
              onPress={() => {
                handleClose();
              }}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleConfirm();
              }}
            >
              <Text>Confirmar</Text>
            </TouchableOpacity>
            <Image source={{ uri: uri }} />
          </View>
        </Modal>
      )}
    </View>
  );
};
