import React from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit, value }) => {
  const data = [100, 200, 500, 1000, 2000];
  return (
    <View>
      <Text style={style.titulo}>Monto</Text>
      <View style={style.inputContainer}>
        <FlatList
          keyExtractor={(data) => data}
          data={data}
          renderItem={({ item }) => {
            return (
              <Text style={style.input} onPress={() => handleValue(item)}>
                $ {item}
              </Text>
            );
          }}
        />
      </View>
      <Text>Monto: ${value}</Text>

      <Button
        title="Seleccionar monto"
        onPress={() => navigation.navigate("SelectOtherAmount")}
      />
      <Button
        title="Confirmar"
        onPress={() => {
          navigation.navigate("SelectAccount", { value: value });
        }}
      />
    </View>
  );
};
