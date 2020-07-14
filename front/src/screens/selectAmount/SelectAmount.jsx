import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit }) => {
  const data = [100, 200, 500, 1000, 2000];
  return (
    <View>
      <Text>Seleccionar Monto</Text>

      <FlatList
        keyExtractor={(data) => data}
        data={data}
        renderItem={({ item }) => {
          return (
            <Button
              style={style.button}
              title={`$ ${item}`}
              onPress={() => handleValue(item)}
            />
          );
        }}
      />
      <Button
        title="Seleccionar monto"
        onPress={() => navigation.navigate("selectOtherAmount")}
      />
      <Button
        title="Confirmar"
        onPress={() => {
          handleSubmit();
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
