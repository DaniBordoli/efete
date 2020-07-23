import React from "react";
import { View, Text, Button, Image, Link } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Load } from "../../Common/loading";
import { style } from "./style";

export default ({ navigation, transaction }) => {
  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        {transaction.agent ? (
          <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
            <Text style={style.text}>Monto: $ {transaction.amount}</Text>
            <Text style={style.text}>
              Cuenta de Origen: {transaction.originAccount[0].accountNumber}
            </Text>
            <Text style={style.text}>
              Banco: {transaction.originAccount[0].nameEntity[0].nameEntity}
            </Text>
            <Text style={style.text}>
              Cuenta de destino:{" "}
              {transaction.destinationAccount[0].accountNumber}
            </Text>
            <Text style={style.text}>
              Banco:{" "}
              {transaction.destinationAccount[0].nameEntity[0].nameEntity}
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
    </View>
  );
};
