import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { ButtonPrimary, Texto } from "../../Common/buttons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";

import { style } from "./style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { fondoColor } from "../../Common/constans";

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
  mode,
  notVerified,
}) => {
  var height = Dimensions.get("screen").height; // window
  return (
    <View
      style={{ height: height, backgroundColor: mode ? fondoColor : "black" }}
    >
      <View
        style={{
          height: height * 0.9,
        }}
      >
        <Text style={style.titulo}>Efeté</Text>
        <Text style={style.iniciarSesion}>Acceder</Text>
        <View style={mode ? style.inputContainer : style.inputContainerDark}>
          <View style={mode ? style.searchSection : style.searchSectionDark}>
            <Icon
              style={style.searchIcon}
              name="email-outline"
              size={24}
              color={mode ? "#94AFB6" : "white"}
            />
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              style={mode ? style.input : style.inputDark}
              value={username}
              placeholder="Email"
              onChangeText={(username) => {
                handleValueUsername(username);
              }}
            />
          </View>

          <View style={style.hr} />

          <View style={mode ? style.searchSection : style.searchSectionDark}>
            <Icon
              style={style.searchIcon}
              name="lock-outline"
              size={24}
              color={mode ? "#94AFB6" : "white"}
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={mode ? style.input : style.inputDark}
              value={password}
              placeholder="Contraseña"
              onChangeText={(password) => {
                handleValuePassword(password);
              }}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Icon
                  style={mode ? style.eyeLock : style.eyeLockDark}
                  name="eye-off"
                  size={22}
                  color={mode ? "#94AFB6" : "white"}
                />
              ) : (
                <Icon
                  style={mode ? style.eyeLock : style.eyeLockDark}
                  name="eye"
                  size={22}
                  color={mode ? "#94AFB6" : "white"}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {user.message ? (
          <Text>{user.message}</Text>
        ) : user._id && notVerified ? (
          <View style={{ flexDirection: "row" }}>
            <Text style={style.alerta}>Tu cuenta no ha sido verificada.</Text>
            <Text
              onPress={() => {
                handleVerifyAccount();
              }}
              style={{
                ...style.alerta,
                color: mode ? "#6F76E4" : "white",
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Verificar cuenta
            </Text>
          </View>
        ) : null}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 20,
          }}
        >
          <Button
            icon={
              <Icon
                style={{ margin: 10 }}
                name="google"
                size={20}
                color="#d94821"
              />
            }
            buttonStyle={mode ? style.border : style.borderDark}
            titleStyle={{ color: mode ? "#d94821" : "white", fontSize: 15 }}
            title="GOOGLE"
          />

          <Button
            icon={
              <Icon
                style={{ marginRight: 10 }}
                name="facebook"
                size={20}
                color="#2F80ED"
              />
            }
            buttonStyle={mode ? style.border : style.borderDark}
            titleStyle={{ color: mode ? "#3a5aa0" : "white", fontSize: 15 }}
            title="FACEBOOK"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "center",
          height: height * 0.2,
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
          buttonStyle={mode ? style.botonRegister : style.botonRegisterDark}
          titleStyle={mode ? style.tituloRegister : style.tituloRegisterDark}
          title="Registrarte"
          onPress={() => {
            navigation.navigate("Register");
          }}
        ></Button>
      </View>
    </View>
  );
};
