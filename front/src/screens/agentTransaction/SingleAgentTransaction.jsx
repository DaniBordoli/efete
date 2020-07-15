import React from "react";
import { View, Text, Button, Image, Link } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default ({ navigation, transaction }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View>
      {transaction.agent ? (
        <View>
          <Text>Monto: $ {transaction.amount}</Text>
          <Text>
            Cuenta de Origen: {transaction.originAccount[0].accountNumber}
          </Text>
          <Text>Banco: {transaction.originAccount[0].nameEntity}</Text>
          <Text>
            Cuenta de destino: {transaction.destinationAccount[0].accountNumber}
          </Text>
          <Text>Banco: {transaction.destinationAccount[0].nameEntity}</Text>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
      <Button
        title="Volver a transacciones"
        onPress={() => navigation.navigate("Agent")}
      ></Button>
    </View>
  );
};
