import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
// import { useTheme } from '@react-native/navigation'
import { colors, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { buttonColor } from "../../Common/constans";

export default ({ navigation, transaction ,mode}) => {
  console.log("Transacciones1", transaction);
  return (
    <ScrollView>
    <View>
      <TouchableOpacity
        style={style.clearIcon}
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <MaterialCommunityIcons
          name="close-circle-outline"
          size={35}
          color={buttonColor}
        />
      </TouchableOpacity>
      <View style={style.okIcon}>
        <Image source={require("../../../assets/iconos/ok.png")} />
      </View>
      <View style={style.transactionContainer}>
        <Text style={style.titulo}>Transacción Realizada</Text>
        <Text style={style.subTitle}>Monto:</Text>
        <Text style={style.content}>${transaction.amount}</Text>
        <Text style={style.subTitle}>Cuenta:</Text>
        <Text style={style.content}>
          {transaction.originAccount[0].accountNumber}
        </Text>
        <Text style={style.content}>
          {transaction.originAccount[0].nameEntity[0].nameEntity}
        </Text>
        <Text style={style.subTitle}>Dónde:</Text>
        <Text style={style.content}>{transaction.agent[0].name}</Text>
        <Text style={style.content}>{transaction.agent[0].address}</Text>
      </View>
      <View>
        <Button
          buttonStyle={style.confirmar}
          titleStyle={style.tituloConfirmar}
          title="Descargar Comprobante"
          onPress={() => {
            console.log("se apreta");
          }}
        />
      </View>
    </View>
  </ScrollView>
  );
};
