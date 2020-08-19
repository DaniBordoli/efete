import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style.js";
import {
  FontAwesome,
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

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
        <View style={style.twoButtonCont}>
          <TouchableOpacity
            style={mode ? style.agente : style.agenteDark}
            activeOpacity={0.5}
            onPress={() => navigation.navigate("EditAgentProfile")}
          >
            <MaterialCommunityIcons
              name="circle-edit-outline"
              size={67}
              color="#6F76E4"
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
            <Feather
              name="plus-circle"
              size={67}
              color="#6F76E4"
              style={style.imageIconStyle}
            />
            <Text style={mode ? style.text : style.textDark}>
              Compartir Comercio
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.twoButtonCont}>
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
            onPress={() =>
              navigation.navigate("AgentHistory", {
                agent: agent,
              })
            }
          >
            <MaterialIcons
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
