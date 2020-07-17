import React from "react";
import { View, TextInput, Text,   } from "react-native";
import { Button } from "react-native-elements";
import {
  ButtonPrimary,
  Texto,
} from "../../Common/buttons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { style } from "./style.js";

//funcion para ver los bordes
const borde = function (color) {
  return {
    borderColor: color,
    borderWidth: 7,
  };
};

export default ({
  firstNameChange,
  usernameChange,
  lastNameChange,
  dniChange,
  passwordChange,
  handleSubmit,
  navigation,
}) => (
  <View style={style.container}>
    <View style={{ flex:8}}>
      <Text style={style.titulo}>Efeté</Text>
      <Text style={style.registrarse}>Registrarte</Text>

      <View style={style.inputContainer}>
        <View style={style.searchSection}>
          
          <Icon
            style={style.searchIcon}
            name="account-circle-outline"
            size={24}
            color="#94AFB6"
          />
          <TextInput
            style={style.input}
            placeholder="Nombre"
            onChangeText={(text) => firstNameChange(text)}
          />
        </View>
        <View style={style.hr} />
        <View style={style.searchSection}>
          <Icon
            style={style.searchIcon}
            name="account-circle-outline"
            size={24}
            color="#94AFB6"
          />
          <TextInput
            style={style.input}
            placeholder="Apellido"
            onChangeText={(text) => lastNameChange(text)}
          />
        </View>
        <View style={style.hr} />
        <View style={style.searchSection}>
          <Icon
            style={style.searchIcon}
            name="account-circle-outline"
            size={24}
            color="#94AFB6"
          />
          <TextInput
            keyboardType="numeric"
            style={style.input}
            placeholder="DNI"
            onChangeText={(text) => dniChange(text)}
          />
        </View>
        <View style={style.hr} />
        <View style={style.searchSection}>
          <Icon
            style={style.searchIcon}
            name="email-outline"
            size={24}
            color="#94AFB6"
          />
          <TextInput
          
            keyboardType="email-address"
            style={style.input}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={(text) => usernameChange(text)}
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
          autoGrow={true}
          importantForAutofill='yes'
            autoCapitalize="none"
            secureTextEntry={true}
            password={true}
            style={style.input}
            placeholder="Contraseña"
            onChangeText={(text) => passwordChange(text)}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 20,
        }}
      >
        <Button
          buttonStyle={{ backgroundColor: "#FFFFFF", width: 180 ,marginRight:5 
         } }
          titleStyle={{ color: "#d94821" }}
          title="GOOGLE"
          
        />

        <Button
          buttonStyle={{ backgroundColor: "#FFFFFF", width: 180 ,marginLeft:5}}
          titleStyle={{ color: "#3a5aa0" }}
          title="FACEBOOK"
        />
      </View>
    </View>
    <View
      style={{
        zIndex: -1,
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "center",
        }}
      >
        <Button
          buttonStyle={style.botonIniciar}
          titleStyle={style.tituloIniciar}
          title="Registrarse"
          onPress={() => {
            handleSubmit();
            navigation.navigate("Verificar");
          }}
        />

        <ButtonPrimary
          style={style.register}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Texto style={style.textRegister}>Iniciar Sesión</Texto>
        </ButtonPrimary>
      </View>
    </View>
  </View>
);
