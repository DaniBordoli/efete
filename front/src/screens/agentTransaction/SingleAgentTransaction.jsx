import React from "react";
import { View, Text, Button, Image, Link, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Load } from "../../Common/loading";
import { style } from "./style";

export default ({ navigation, transaction }) => {
  console.log(transaction, "WALLY");
  return (
    <ScrollView>
      <View style={style.mainContainer}>
        <View style={style.container}>
          <View style={style.cajas}>
            <Text style={style.title}>Monto</Text>
            <Text style={style.description}>$ {transaction.amount}</Text>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Cuenta de Origen</Text>
            <Text style={style.description}>
              {transaction.originAccount[0].accountNumber}
            </Text>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Banco</Text>
            <Text style={style.description}>
              {transaction.originAccount[0].nameEntity[0].nameEntity}
            </Text>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Cuenta de destino</Text>
            <Text style={style.description}>
              {transaction.destinationAccount[0].accountNumber}
            </Text>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Banco</Text>
            <Text style={style.description}>
              {transaction.destinationAccount[0].nameEntity[0].nameEntity}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
