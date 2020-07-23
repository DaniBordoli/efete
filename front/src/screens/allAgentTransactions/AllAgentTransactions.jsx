import React from "react";
import { View, Text, Button, Image, Link, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { style } from "./style.js";

export default ({ navigation, agentTransactions }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {agentTransactions[0] !== undefined ? (
        <View style={{ flex: 1 }}>
          <Text style={style.movimientos}>Movimientos</Text>
          <FlatList
            keyExtractor={(agentTransactions) => agentTransactions._id}
            data={agentTransactions}
            renderItem={({ item }) => {
              return (
                <View>
                  <Card>
                    <Text>Monto: $ {item.amount}</Text>
                    <Text>
                      Banco: {item.originAccount[0].nameEntity[0].nameEntity}
                    </Text>
                    <Text>
                      Numero de cuenta: {item.originAccount[0].accountNumber}
                    </Text>

                    <Button
                      buttonStyle={{
                        marginRight: 25,
                        backgroundColor: "#629bcaa6",
                      }}
                      title="ver transaccion"
                      onPress={() =>
                        navigation.navigate("SingleAgentTransaction", {
                          item,
                        })
                      }
                    />
                  </Card>
                </View>
              );
            }}
          ></FlatList>
        </View>
      ) : (
        <Text style={{ textAlign: "center" }}>No hay operaciones todavia</Text>
      )}
    </View>
  );
};
