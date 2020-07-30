import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";

export default ({ handleToken }) => {
  return (
    <View>
      <Text>Para poder utilizar la App tenes que validar tu identidad</Text>
      <Text>
        Tomate una foto de frente, con expresión neura, sin anteojos ni
        elementos que tapen el rostro, fondo uniforme y buena iluminación.
      </Text>

      <Button
        onPress={() => {
          handleToken();
        }}
      >
        Validar Identidad
      </Button>
    </View>
  );
};
