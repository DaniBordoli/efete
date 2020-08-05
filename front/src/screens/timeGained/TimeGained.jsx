import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Load } from "../../Common/loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ navigation, userTransactions }) => {
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
            <Text style={style.title}>El tiempo no se compra</Text>

            <View style={style.hr}></View>
            <Text style={style.text1}>
              El tiempo de espera promedio para sacar plata de un cajero es de
              30 minutos.
            </Text>
            <Text style={style.text1}>Con Efete 10 minutos.</Text>

            {/*   <Image
              style={style.icon}
              source={require("../../../assets/icon.png")}
            />

 */}
            <View style={style.hr}></View>
            <Text style={style.title}>{userTransactions * 20}</Text>
            <View style={style.hr}></View>

            <Text style={style.text1}>
              Ya te ahorraste {userTransactions * 20} minutos en filas de
              cajeros
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
