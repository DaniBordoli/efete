import React from "react";
import { View, Text, Button, Image, Link, FlatList } from "react-native";

export default ({ navigation, agentTransactions }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View>
      {agentTransactions ? (
        <View>
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
      <Button
        title="Volver a mi perfil"
        onPress={() => navigation.navigate("Agent")}
      ></Button>
    </View>
  );
};
