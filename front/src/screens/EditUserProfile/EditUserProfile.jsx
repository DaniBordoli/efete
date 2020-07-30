import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

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
  password,
}) => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>
          <Text style={style.movimientos}>Datos Personales</Text>
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
              <TouchableOpacity /* onPress={updateSecureTextEntry} */
                style={{ marginRight: 10, marginRight: 5 }}
              >
                <MaterialCommunityIcons name="pencil" size={20} color="black" />
              </TouchableOpacity>
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
              <TouchableOpacity
                /* onPress={updateSecureTextEntry} */ style={{
                  marginRight: 10,
                  marginRight: 5,
                }}
              >
                <MaterialCommunityIcons name="pencil" size={20} color="black" />
              </TouchableOpacity>
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
              <TouchableOpacity
                /* onPress={updateSecureTextEntry} */ style={{
                  marginRight: 10,
                  marginRight: 5,
                }}
              >
                <MaterialCommunityIcons name="pencil" size={20} color="black" />
              </TouchableOpacity>
            </View>

            <Text style={style.text}>Contraseña</Text>
            <View style={style.searchSection}>
              <TextInput
                style={style.input}
                onChangeText={(e) => handleChange(e, "password")}
                name="password"
                // defaultValue={password}
                required
              />
              <TouchableOpacity
                /* onPress={updateSecureTextEntry} */ style={{
                  marginRight: 10,
                  marginRight: 5,
                }}
              >
                <MaterialCommunityIcons name="pencil" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Button
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
