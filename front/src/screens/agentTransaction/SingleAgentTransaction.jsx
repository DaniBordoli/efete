import React from "react";
import { View, Text, Button, Image, Link } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Load } from "../../Common/loading";
import { style } from "./style";

export default ({ navigation, transaction }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {transaction.agent ? (
        <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
          <Text style={style.text}>Monto: $ {transaction.amount}</Text>
          <Text style={style.text}>
            Cuenta de Origen: {transaction.originAccount[0].accountNumber}
          </Text>
          <Text style={style.text}>
            Banco: {transaction.originAccount[0].nameEntity}
          </Text>
          <Text style={style.text}>
            Cuenta de destino: {transaction.destinationAccount[0].accountNumber}
          </Text>
          <Text style={style.text}>
            Banco: {transaction.destinationAccount[0].nameEntity}
          </Text>
        </View>
      ) : (
        <Load />
      )}
      <Button
        title="Volver a transacciones"
        onPress={() => navigation.navigate("Agent")}
      ></Button>
    </View>
  );
};
