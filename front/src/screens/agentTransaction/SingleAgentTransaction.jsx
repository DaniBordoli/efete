import React from "react";
import { View, Text, ScrollView } from "react-native";

import { style } from "./style";

export default ({ mode, transaction }) => {
  console.log(transaction, "WALLY");
  return (
      <ScrollView style={style.mainContainer} showsVerticalScrollIndicator={false}>
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
      </ScrollView>
  );
};
