import React from "react";
import { View, Text, Button, Image, Link, FlatList } from "react-native";
import { style } from "./style.js";

export default ({ navigation, agentTransactions }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {agentTransactions[0] !== undefined ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={style.movimientos}>Movimientos</Text>
          <FlatList
            keyExtractor={(agentTransactions) => agentTransactions._id}
            data={agentTransactions}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>Monto: $ {item.amount}</Text>
                  <Text>Banco: {item.originAccount[0].nameEntity}</Text>
                  <Text>
                    Numero de cuenta: {item.originAccount[0].accountNumber}
                  </Text>

                  <Text>Extracción realizada</Text>
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
                </View>
              );
            }}
          ></FlatList>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
