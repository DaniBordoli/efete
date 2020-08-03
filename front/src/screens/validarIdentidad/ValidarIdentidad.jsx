import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";

export default ({ handleToken,mode }) => {
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
        <TouchableOpacity
          style={style.confirmar}
          title="Tomar foto"
          onPress={() => {
            handleToken();
          }}
        >
          <Text style={style.textConfirmar}>Tomar foto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
