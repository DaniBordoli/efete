import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./style";
import { Button } from "react-native-elements";

export default ({ navigation, transaction }) => {
  return (
    <View>
      <TouchableOpacity
        style={style.clearIcon}
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <Image source={require("../../../assets/iconos/mdi_clear.png")} />
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
          {transaction.originAccount[0].nameEntity}
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
  );
};
