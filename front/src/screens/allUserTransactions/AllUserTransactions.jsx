import React from "react";
import { View, Text, FlatList } from "react-native";
import { style } from "./style.js";
import { Card, Button } from "react-native-elements";
import { buttonColor } from "../../Common/constans.js";

export default ({ navigation, userTransactions, mode }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {userTransactions ? (
        <View style={{ flex: 1 }}>
          <Text style={style.movimientos}>Movimientos</Text>
          <FlatList
            keyExtractor={(userTransactions) => userTransactions._id}
            data={userTransactions}
            renderItem={({ item }) => {
              return (
                <View>
                  <Card>
                    <Text style={style.text}>Monto: {item.amount}</Text>
                    <Text style={style.text}>
                      Agente: {item.agent[0].name} - {item.agent[0].address}
                    </Text>

                    <Button
                      buttonStyle={style.ver}
                      titleStyle={{ color: buttonColor }}
                      title="VER TRANSACCION"
                      onPress={() =>
                        navigation.navigate("SingleUserTransaction", {
                          id: item._id,
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
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
