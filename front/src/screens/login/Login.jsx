import React from "react";
import { View, Text, TextInput, Button } from "react-native";
// import { style } from "./style";

export default ({
  handleValueUsername,
  handleValuePassword,
  handleSubmit,
  username,
  password,
  user,
  isData,
  navigation,
}) => {
  return (
    <View>
      <Text>Efeté</Text>
      <Text>Iniciar Sesión</Text>

      <TextInput
        keyboardType="email-address"
        onChangeText={(username) => {
          handleValueUsername(username);
        }}
        value={username}
        placeholder="Usuario"
      />

      <TextInput
        secureTextEntry={true}
        onChangeText={(password) => {
          handleValuePassword(password);
        }}
        value={password}
        placeholder="Contraseña"
      />
      {user.message ? <Text>{user.message}</Text> : null}
      <Button
        disabled={isData}
        title="Iniciar Sesión"
        onPress={() => {
          handleSubmit();
        }}
      />
      <Button
        title="Registrarte"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};
