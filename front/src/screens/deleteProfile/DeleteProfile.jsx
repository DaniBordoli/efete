import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Load } from "../../Common/loading";

export default ({ navigation, handleSubmit }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        <View>
          <View>
            <Image
              source={require("../../../assets/iconos/arriba.png")}
              style={style.image}
            />
          </View>

          <View>
            <Text style={style.title}>
              ¿Estás seguro que querés eliminar tu cuenta?
            </Text>

            <View style={style.hr}></View>

            <Image
              style={style.icon}
              source={require("../../../assets/icon.png")}
            />

            <View style={style.hr}></View>

            <TouchableOpacity
              style={style.confirmar}
              title="Confirmar"
              onPress={() => {
                handleSubmit();
              }}
            >
              <Text style={style.textConfirmar}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={style.confirmar}
              title="Cancelar"
              onPress={() => {
                navigation.navigate("User");
              }}
            >
              <Text style={style.textConfirmar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
