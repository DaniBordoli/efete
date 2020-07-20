import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { ButtonPrimary, Texto } from "../../Common/buttons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";
import { style } from "./style.js";

//funcion para ver los bordes
const borde = function (color) {
  return {
    borderColor: color,
    borderWidth: 3,
  };
};

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
    <View style={style.container}>
      <View
        style={{
          flex: 8,
        }}
      >
        <Text style={style.titulo}>Efeté</Text>
        <Text style={style.iniciarSesion}>Iniciar Sesión</Text>
        <View style={style.inputContainer}>
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="email-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              style={style.input}
              value={username}
              placeholder="Email"
              onChangeText={(username) => {
                handleValueUsername(username);
              }}
            />
          </View>

          <View style={style.hr} />

          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="lock-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry={true}
              style={style.input}
              value={password}
              placeholder="Contraseña"
              onChangeText={(password) => {
                handleValuePassword(password);
              }}
            />
          </View>
        </View>

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
      </View>

      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "center",
          flex: 1,
          zIndex: -1,
        }}
      >
        <Button
          buttonStyle={style.botonIniciar}
          titleStyle={style.tituloIniciar}
          disabled={isData}
          title="Iniciar Sesión"
          onPress={() => {
            handleSubmit();
          }}
        />

        <ButtonPrimary
          style={style.register}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Texto style={style.textRegister}>Registrarte</Texto>
        </ButtonPrimary>
      </View>
    </View>
  );
};
