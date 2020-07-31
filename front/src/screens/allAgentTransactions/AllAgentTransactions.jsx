import React from "react";
import { View, Text, Image, Link, FlatList } from "react-native";
import { Card, Button } from "react-native-elements";
import { style } from "./style.js";
import { buttonColor } from "../../Common/constans.js";

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
                    <Text style={style.text}>Monto: $ {item.amount}</Text>
                    <Text style={style.text}>
                      Banco: {item.originAccount[0].nameEntity[0].nameEntity}
                    </Text>
                    <Text style={style.text}>
                      Numero de cuenta: {item.originAccount[0].accountNumber}
                    </Text>

                    <Button
                       buttonStyle={style.ver}
                       titleStyle={{color:buttonColor}}
                        title="VER TRANSACCION"
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
