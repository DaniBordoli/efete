import React from "react";
import { View, Text, TextInput, Button } from "react-native";

export default ({
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeUsername,
  handleChangePassword,
  handleSubmit,
  firstName,
  lastName,
  username,
  password,
  userData,
}) => {
  return (
    <View>
      <Text>Datos Personales</Text>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChangeFirstName(e)}
        name="firstName"
        value={firstName}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChangeLastName(e)}
        name="lastName"
        value={lastName}
      />

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChangeUsername(e)}
        name="username"
        value={username}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChangePassword(e)}
        name="password"
        value={password}
      />

      <Button
        onPress={(userData) => handleSubmit(userData)}
        title="Guardar cambios"
        color="#841584"
      />
    </View>
  );
};
