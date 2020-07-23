import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { style } from "./style";

const CreatedAgentOk = ({ agent, navigation }) => {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          style={style.clearIcon}
          onPress={() => {
            navigation.navigate("Agent");
          }}
        >
          <Image source={require("../../../assets/iconos/mdi_clear.png")} />
        </TouchableOpacity>
      </View>
      <View style={style.mainContainer}>
        <View style={style.container}>
          <Text style={style.title}>Efeté</Text>
          <Image
            style={style.ok}
            source={require("../../../assets/iconos/ok.png")}
          />
          <Text style={style.subTitle}>
            ¡El establecimiento se agrego correctamente!
          </Text>
        </View>

        <View style={style.datos}>
          <Text style={style.datosTitle}>DATOS DE ESTABLECIMIENTO</Text>
          <Image style={style.image}></Image>

          <View style={style.caja}>
            <Text style={style.info}>Nombre:</Text>
            <Text style={style.description}> {agent.name} </Text>
          </View>

          <View style={style.caja}>
            <Text style={style.info}>Dirección:</Text>
            <Text style={style.description}> {agent.address} </Text>
          </View>

          <View style={style.caja}>
            <Text style={style.info}>CUIL:</Text>
            <Text style={style.description}> {agent.cuil} </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreatedAgentOk;
