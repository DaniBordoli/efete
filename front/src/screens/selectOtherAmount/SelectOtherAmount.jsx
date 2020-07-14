import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit, value }) => {
  const data = [100, 200, 500, 1000, 2000];
  return (
    <View>
      <Text>Seleccionar Monto</Text>

      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => handleValue(value)}
        value={value}
      />

      <Button
        title="Confirmar"
        onPress={() => {
          handleSubmit();
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
