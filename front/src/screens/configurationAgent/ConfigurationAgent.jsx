import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style.js";

export default ({ mode, navigation, agent }) => {
  return (
    <View style={{ flex: 1, backgroundColor: mode ? "#F1F3F6" : "black" }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("SharedUsers", { agent: agent })}
          >
            <Image
              source={
                mode
                  ? require("../../../assets/iconos/extraccion.png")
                  : require("../../../assets/iconos/extraccionDark.png")
              }
              style={style.imageIconStyle}
            />
            <Text style={mode ? style.text : style.textDark}>Ver Accesos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
