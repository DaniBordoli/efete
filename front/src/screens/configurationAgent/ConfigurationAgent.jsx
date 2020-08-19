import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style.js";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default ({ mode, navigation, agent }) => {
  return (
    <View style={{ backgroundColor: mode ? "#F1F3F6" : "black" }}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("EditAgentProfile")}
          >
            <Image
              source={
                mode
                  ? require("../../../assets/iconos/extraccion.png")
                  : require("../../../assets/iconos/extraccionDark.png")
              }
              style={style.imageIconStyle}
            />
            <Text style={mode ? style.text : style.textDark}>
              Editar Datos del Negocio
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("ShareAgent", { agent: agent })}
          >
            <Image
              source={
                mode
                  ? require("../../../assets/iconos/extraccion.png")
                  : require("../../../assets/iconos/extraccionDark.png")
              }
              style={style.imageIconStyle}
            />
            <Text style={mode ? style.text : style.textDark}>
              Compartir Comercio
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
          }}
        >
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SharedUsers", { agent: agent })}
          >
            <FontAwesome
              name="universal-access"
              size={67}
              color="#6F76E4"
              style={style.imageIconStyle}
            />

            <Text style={mode ? style.text : style.textDark}>Ver Accesos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SharedUsers", { agent: agent })}
          >
            <FontAwesome5
              name="history"
              size={67}
              color="#6F76E4"
              style={style.imageIconStyle}
            />
            <Text style={mode ? style.text : style.textDark}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
