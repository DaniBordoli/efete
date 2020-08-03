import React from "react";
import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";

export default ({
  takePicture,
  uriFoto,
  handleConfirm,
  openGallery,
  handleCancel,
  modal,
}) => {
  return (
    <View>
      {uriFoto ? (
        <View style={style.modalContainer}>
          <Modal animationType="slide" transparent={true} visible={modal}>
            <View style={style.modal}>
              <Image source={{ uri: uriFoto }} style={style.image} />

              <View style={style.buttonsContainer}>
                <View>
                  <TouchableOpacity
                    onPress={() => handleCancel()}
                    title="Cancelar"
                  >
                    <Entypo
                      name="circle-with-cross"
                      size={50}
                      color="#DD1919"
                    />
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity onPress={() => handleConfirm()}>
                    <AntDesign name="checkcircleo" size={50} color="#00CC96" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <View style={style.buttonsContainer}>
          <View style={style.button}>
            <TouchableOpacity onPress={() => openGallery()}>
              <Entypo name="image" size={50} color="#6F76E4" />
              <Text>Galería</Text>
            </TouchableOpacity>
          </View>
          <View style={style.button}>
            <TouchableOpacity onPress={() => takePicture()}>
              <Entypo name="camera" size={50} color="#6F76E4" />
              <Text>Cámara</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};
