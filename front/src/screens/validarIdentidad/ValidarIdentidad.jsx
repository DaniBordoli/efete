import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import OpenCamera from "../camera/OpenCameraContainer";

export default ({ view, navigation, mode }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image
          source={require("../../../assets/iconos/arriba.png")}
          style={style.image}
        />
      </View>
      <Text style={style.title}>
        Para poder utilizar la App tenes que validar tu identidad
      </Text>
      <View style={style.hr}></View>
      <View>
        <Text style={style.text1}>
          Tomate una foto cumpliendo los siguientes puntos:
        </Text>
        <Text style={style.text1}>- De frente</Text>
        <Text style={style.text1}>- Con expresión neutra</Text>
        <Text style={style.text1}>
          - Sin anteojos ni elementos que tapen el rostro
        </Text>
        <Text style={style.text1}>- Fondo uniforme y buena iluminación</Text>
      </View>
      <View style={style.hr}></View>

      <View style={style.botonesCont}>
        <OpenCamera view={view} navigation={navigation} />
      </View>
    </View>
  );
};
