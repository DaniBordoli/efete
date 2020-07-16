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
  handleVerifyAccount,
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
      {user.message ? (
        <Text>{user.message}</Text>
      ) : user._id && !user.isVerified ? (
        <View>
          <Text>Tu cuenta no ha sido verificada.</Text>
          <Text
            onPress={() => {
              handleVerifyAccount();
            }}
          >
            Verificar cuenta
          </Text>
        </View>
      ) : null}
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

      <Button
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};
