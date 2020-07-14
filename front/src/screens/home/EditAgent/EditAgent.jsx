import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { Icon } from "react-native-elements";
import { style } from "./style";

export default ({
  handleSubmit,
  handleChange,
  firstName,
  lastName,
  username,
  password,
}) => {
  return (
    <View>
      <Text>Datos Personales</Text>
      <Text>
        {firstName} {lastName}
      </Text>
      <View></View>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChange(e, "username")}
        name="username"
        defaultValue={username}
        required
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChange(e, "password")}
        name="password"
        defaultValue={password}
        required
      />

      <Button
        onPress={() => handleSubmit()}
        title="Guardar cambios"
        color="#841584"
        alert
      />
    </View>
  );
};
