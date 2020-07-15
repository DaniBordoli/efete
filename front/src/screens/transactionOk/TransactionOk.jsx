import React from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { style } from "./style";

export default ({ navigation, transaction }) => {
  return (
    <View>
      <Text>Transacción Realizada</Text>
      <Text>Monto:</Text>
      <Text>${transaction.amount}</Text>
      <Text>Cuenta:</Text>
      <Text>{transaction.originAccount[0].accountNumber}</Text>
      <Text>{transaction.originAccount[0].nameEntity}</Text>
      <Text>Donde:</Text>
      <Text>{transaction.agent[0].name}</Text>
      <Text>{transaction.agent[0].address}</Text>
      <Button
        title="Ir a inicio"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};
