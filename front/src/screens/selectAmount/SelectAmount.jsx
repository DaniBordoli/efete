import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit, value }) => {
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
              title={item}
              onPress={() => handleValue(item)}
            />
          );
        }}
      />
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
