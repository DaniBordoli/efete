import React from "react";
import { View, Text, Button, Image, Link, FlatList } from "react-native";

export default ({ navigation, userTransactions }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View>
      {userTransactions ? (
        <View>
          <FlatList
            keyExtractor={(userTransactions) => userTransactions._id}
            data={userTransactions}
            renderItem={({ item }) => {
              return (
                <View>
                  <Text>Monto: {item.amount}</Text>
                  <Text>
                    Agente: {item.agent[0].name} - {item.agent[0].address}
                  </Text>
                  <Text>Extracción realizada</Text>
                  <Button
                    title="ver transaccion"
                    onPress={() =>
                      navigation.navigate("SingleUserTransaction", {
                        id: item._id,
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
        onPress={() => navigation.navigate("User")}
      ></Button>
    </View>
  );
};
