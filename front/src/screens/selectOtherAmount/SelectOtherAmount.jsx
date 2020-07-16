import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit, value }) => {
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
          navigation.navigate("SelectAccount", { value: value });
        }}
      />
    </View>
  );
};
