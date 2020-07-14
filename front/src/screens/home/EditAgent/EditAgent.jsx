import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";

export default ({ handleSubmit, handleChange, name, address, CUIL }) => {
  return (
    <View>
      <Text>Datos de tu Negocio</Text>

      <Text>Nombre del Negocio:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChange(e, "name")}
        name="name"
        defaultValue={name}
        required
      />

      <Text>Direccion:</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(e) => handleChange(e, "address")}
        name="address"
        defaultValue={address}
        required
      />

      <Text>CUIL:</Text>
      <Text>{CUIL}</Text>

      <Button
        onPress={() => handleSubmit()}
        title="Guardar cambios"
        color="#841584"
        alert
      />
    </View>
  );
};
