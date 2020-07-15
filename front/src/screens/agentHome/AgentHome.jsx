import React from "react";
import { View, Text, FlatList, Image, Link, Button } from "react-native";
import { style } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";

export default ({ agentTransactions, navigation }) => {
  return (
    <View>
      <View>
        <Text>Movimientos</Text>

        <View>{/* Espacio para las imagenes que linkean*/}</View>
        <FlatList
          keyExtractor={(agentTransactions) => agentTransactions._id}
          data={agentTransactions}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>Monto: {item.amount}</Text>
                <Text>
                  Usuario {item.user[0].firstName} - {item.user[0].lastName}
                </Text>
                <Text>Extracción realizada</Text>
                <Button
                  title="ver transaccion"
                  /* onPress={() =>
                    navigation.navigate("SingleUserTransaction", {
                      id: item._id,
                    })
                  } */
                />
              </View>
            );
          }}
        ></FlatList>
      </View>
    </View>
  );
};
