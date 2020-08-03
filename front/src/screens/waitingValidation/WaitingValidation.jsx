import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Load } from "../../Common/loading";

export default ({ navigation, loading, user }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.imageContainer}>
        {loading ? (
          <View>
            <View>
              <Image
                source={require("../../../assets/iconos/arriba.png")}
                style={style.image}
              />
            </View>
            {user.validatedIdentity ? (
              <View>
                <Text style={style.title}>
                  Tu identidad se validó correctamente
                </Text>

                <View style={style.hr}></View>

                <Image
                  style={style.icon}
                  source={require("../../../assets/icon.png")}
                />

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
              </View>
            ) : (
              <View>
                <Text style={style.title}>
                  Tu identidad no pudo ser validada. Por favor, intenta
                  nuevamente.{" "}
                </Text>

                <View style={style.hr}></View>

                <Image
                  style={style.icon}
                  source={require("../../../assets/icon.png")}
                />

                <View style={style.hr}></View>

                <Text style={style.text1}>
                  Tu identidad no pudo ser validada. Por favor, intenta
                  nuevamente.
                </Text>

                <TouchableOpacity
                  style={style.confirmar}
                  title="Validar Identidad"
                  onPress={() => {
                    navigation.navigate("ValidateIdentity");
                  }}
                >
                  <Text style={style.textConfirmar}>Validar Identidad</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ) : (
          <Load />
        )}
      </View>
    </View>
  );
};
