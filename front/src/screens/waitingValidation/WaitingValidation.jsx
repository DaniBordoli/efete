import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";

export default ({ navigation }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image
          source={require("../../../assets/iconos/arriba.png")}
          style={style.image}
        />
      </View>

      <Text style={style.title}>Tu identidad se validó correctamente</Text>

      <View style={style.hr}></View>

      <Image style={style.icon} source={require("../../../assets/icon.png")} />

      <View style={style.hr}></View>

      <Text style={style.text1}>Ya estás listo para Efetear</Text>

      <TouchableOpacity
        style={style.confirmar}
        title="Iniciar sesión"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={style.textConfirmar}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* <View style={style.imageContainer}>
        <Image
          source={require("../../../assets/iconos/arriba.png")}
          style={style.image}
        />
      </View>

      <Text style={style.title}>No se pudo validar tu identidad</Text>

      <View style={style.hr}></View>

      <Text style={style.text1}>
        Por favor toma la foto nuevamente cumpliendo estos puntos:
      </Text>
      <View>
        <Text style={style.text1}>- De frente</Text>
        <Text style={style.text1}>- Con expresión neutra</Text>
        <Text style={style.text1}>
          - Sin anteojos ni elementos que tapen el rostro
        </Text>
        <Text style={style.text1}>- Fondo uniforme y buena iluminación</Text>
      </View>

      <TouchableOpacity
        style={style.confirmar}
        title="Tomar Foto"
        onPress={() => {
          navigation.navigate("OpenCamera");
        }}
      >
        <Text style={style.textConfirmar}>Tomar Foto</Text>
      </TouchableOpacity> */}
    </View>
  );
};
