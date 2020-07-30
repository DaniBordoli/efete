import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./style";
import { buttonColor } from "../../Common/constans";
import { Load } from "../../Common/loading";

const CreatedAgentOk = ({ agent, navigation, foto, name, address, cuil }) => {
  return (
    <ScrollView>
      <View>
        <TouchableOpacity
          style={style.clearIcon}
          onPress={() => {
            navigation.navigate("Agent");
          }}
        >
          <MaterialCommunityIcons
            name="close-circle-outline"
            size={35}
            color={buttonColor}
          />
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
          <Image style={style.image} source={{ uri: foto }}></Image>

          <View style={style.caja}>
            <Text style={style.info}>Nombre:</Text>
            <Text style={style.description}> {name} </Text>
          </View>

          <View style={style.caja}>
            <Text style={style.info}>Dirección:</Text>
            <Text style={style.description}> {address} </Text>
          </View>

          <View style={style.caja}>
            <Text style={style.info}>CUIL:</Text>
            <Text style={style.description}> {cuil} </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CreatedAgentOk;
