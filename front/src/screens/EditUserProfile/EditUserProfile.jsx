import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./style";

export default ({
  handleSubmit,
  handleChange,
  firstName,
  lastName,
  username,
  mode,
  updateSecureTextEntry,
  data,
  isData,
}) => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.movimientos}>EDITAR TU PERFIL</Text>
          <View style={{ margin: 20 }}>
            <Text style={style.text}>Nombre</Text>
            <View style={style.searchSection}>
              <TextInput
                style={style.input}
                onChangeText={(e) => handleChange(e, "firstName")}
                firstName="firstName"
                defaultValue={firstName}
                required
              />
        
            </View>

            <Text style={style.text}>Apellido</Text>
            <View style={style.searchSection}>
              <TextInput
                style={style.input}
                onChangeText={(e) => handleChange(e, "lastName")}
                lastName="lastName"
                defaultValue={lastName}
                required
              />
              
            </View>

            <Text style={style.text}>Correo electrónico</Text>
            <View style={style.searchSection}>
              <TextInput
                style={style.input}
                onChangeText={(e) => handleChange(e, "username")}
                name="username"
                defaultValue={username}
                required
              />
              
            </View>

            <Text style={style.text}>Contraseña</Text>
            <View style={style.searchSection}>
              <TextInput
                autoCapitalize="none"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={mode ? style.input : style.inputDark}
                onChangeText={(e) => {
                  handleChange(e, "password");
                }}
                required
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

          <View>
            <Button
              disabled={isData}
              buttonStyle={style.boton}
              titleStyle={{
                color: "#ffffff",
                fontSize: 17,
                fontFamily: "nunito",
                textAlign: "center",
              }}
              onPress={() => handleSubmit()}
              title="GUARDAR CAMBIOS"
              alert
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
