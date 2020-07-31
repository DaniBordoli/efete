import React from "react";
import Constants from "expo-constants";
import { Text, View, Button, Image, StyleSheet } from "react-native";

export default ({ takePicture, uriFoto, handleConfirm, openGallery }) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Button onPress={() => takePicture()} title="Sacar foto " />
        <Button onPress={() => openGallery()} title="Abrir galeria" />

        {uriFoto ? (
          <View>
            <Image
              source={{ uri: uriFoto }}
              style={{ width: 200, height: 200 }}
            />
            <Button onPress={() => handleConfirm()} title="Confirmar Foto" />
          </View>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
});
