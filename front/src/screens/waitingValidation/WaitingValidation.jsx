import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { style } from "./style";
import { useNavigation } from "@react-navigation/native";

export default () => {
  return (
    <View>
      {esperando ? (
        <View>
          ( condicion ? (
          <View>
            <Text>Tu identidad se valido correctamente</Text>

            <Button>Iniciar sesion</Button>
          </View>
          ) : (
          <View>
            <Text>Acceso denegado</Text>

            <Button>Tomar foto nuevamente</Button>
          </View>
          ))
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
