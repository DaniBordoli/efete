import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { styles } from "./style";

export default ({
  firstNameChange,
  usernameChange,
  lastNameChange,
  dniChange,
  passwordChange,
  handleSubmit,
  navigation
}) => (
  <View style={{ display: "flex", alignSelf: "center" }}>
    <Text style={styles.text}>Nombre</Text>
    <TextInput
      style={styles.inp}
      onChangeText={(text) => firstNameChange(text)}
      placeholder="Nombre"
    />

    <Text style={styles.text}>Apellido</Text>
    <TextInput
      style={styles.inp}
      onChangeText={(text) => lastNameChange(text)}
      placeholder="Apellido"
    />

    <Text style={styles.text}>DNI</Text>
    <TextInput
      keyboardType="numeric"
      onChangeText={(text) => dniChange(text)}
      placeholder="DNI"
      style={styles.inp}
    />

    <Text style={styles.text}> Email</Text>
    <TextInput
      keyboardType="email-address"
      onChangeText={(text) => usernameChange(text)}
      placeholder="Email"
      style={styles.inp}
      autoCapitalize="none"
    />

    <Text style={styles.text}>Contraseña</Text>
    <TextInput
      secureTextEntry={true}
      password={true}
      onChangeText={(text) => passwordChange(text)}
      placeholder="Contraseña"
      style={styles.inp}
      autoCapitalize="none"

    />

    <Text
      onPress={() => {
        handleSubmit();
        navigation.navigate("Verificar");
      }}
      style={styles.register}
    >
      Registrarse
    </Text>
  </View>
);
