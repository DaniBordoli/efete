import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Link,
  Button,
  ActivityIndicator,
} from "react-native";
import { style } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";

export default ({ userTransactions, navigation, loading }) => {
  return (
    <View>
      {loading ? (
        <View>
          <Button
            title="Realizar una Extracción"
            onPress={() => {
              navigation.navigate("SelectAmount");
            }}
          />
          <Text>Movimientos</Text>

          <View>{/* Espacio para las imagenes que linkean*/}</View>
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
          <Button
            title="ver todas las operaciones"
            onPress={() =>
              navigation.navigate("AllUserTransactions", {
                userTransactions,
              })
            }
          />
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
