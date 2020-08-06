import React, { useReducer } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import ConfettiCannon from "react-native-confetti-cannon";

export default ({ navigation, userTransactions }) => {
  return (
    <View style={style.mainContainer}>
      {userTransactions > 0 ? (
        <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
      ) : null}
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
            <Text style={style.text1}>Con Efeté, 10 minutos.</Text>

            {userTransactions > 0 ? (
              <View>
                <View style={style.hr}></View>
                <Text style={style.titleNumber}>{userTransactions * 20}</Text>
                <View style={style.hr}></View>
                <Text style={style.text1}>
                  Ya te ahorraste {userTransactions * 20} minutos de filas en
                  cajeros
                </Text>
              </View>
            ) : (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate("User")}>
                  <Text style={style.title2}>
                    Empezá a usar Efeté para ahorrar tiempo
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
