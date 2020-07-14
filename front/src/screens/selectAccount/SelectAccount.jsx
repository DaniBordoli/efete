import React from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit }) => {
  return (
    <View>
      <Text>Monto para Extraer</Text>
      <TextInput>{}</TextInput>

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
        title="Realizar Transacción"
        onPress={() => {
          handleSubmit();
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
