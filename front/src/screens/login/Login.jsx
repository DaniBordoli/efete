import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import { ButtonPrimary, Texto } from "../../Common/buttons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";
import { style } from "./style.js";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  updateSecureTextEntry,
  data,
}) => {
  return (
    <View style={style.container}>
      <View
        style={{
          flex: 8,
        }}
      >
        <Text style={style.titulo}>Efeté</Text>
        <Text style={style.iniciarSesion}>Acceder</Text>
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
              secureTextEntry={data.secureTextEntry ? true : false}
              style={style.input}
              value={password}
              placeholder="Contraseña"
              onChangeText={(password) => {
                handleValuePassword(password);
              }}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Icon
                  style={style.eyeLock}
                  name="eye-off"
                  size={22}
                  color="#94AFB6"
                />
              ) : (
                <Icon
                  style={style.eyeLock}
                  name="eye"
                  size={22}
                  color="#94AFB6"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      

        {user.message ? (
          <Text>{user.message}</Text>
        ) : user._id && !user.isVerified ? (
          <View style={{ flexDirection: "row" }}>
            <Text style={style.alerta}>Tu cuenta no ha sido verificada.</Text>
            <Text
              onPress={() => {
                handleVerifyAccount();
              }}
              style={{ ...style.alerta, color: "#6F76E4" }}
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

        <Button
          buttonStyle={style.botonRegister}
          titleStyle={style.tituloRegister}
          title="Registrarte"
          onPress={() => {
            navigation.navigate("Register");
          }}
        ></Button>
      </View>
    </View>
  );
};
