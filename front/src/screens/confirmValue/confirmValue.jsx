import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";

const ConfirmValue = ({ navigation, value, agente, agenteUnico }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <Image
          source={require("../../../assets/iconos/arriba.png")}
          style={style.image}
        />
      </View>

      <Text style={style.title}>Tu dinero esta listo para ser retirado</Text>

      <Image style={style.icon} source={require("../../../assets/icon.png")} />

      <View style={style.hr}></View>

      <Text style={style.text}>{agente === null? agenteUnico.name : agente.name}</Text>

      <Text style={style.text1}>{agente === null? agenteUnico.address : agente.address} </Text>

      <Text style={style.text2}>${value}</Text>

      <View style={style.hr}></View>

      <View style={style.botonesCont}>
        <TouchableOpacity
          style={style.volver}
          title="Cancelar"
          onPress={() => {
            navigation.navigate("User");
          }}
        >
          <Text style={style.textCancelar}>Cancelar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.confirmar}
          title="Confirmar"
          onPress={() => {
            navigation.navigate("ScannerQR", { value });
          }}
        >
          <Text style={style.textConfirmar}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmValue;
