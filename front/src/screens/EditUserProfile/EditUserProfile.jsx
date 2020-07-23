import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
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
        <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
          <Text style={style.movimientos}>Datos Personales</Text>

          <Text style={style.text}>Nombre</Text>
          <View style={style.searchSection}>
            <TextInput
              style={style.input}
              onChangeText={(e) => handleChange(e, "name")}
              name="name"
              defaultValue={firstName}
              required
            />
            <TouchableOpacity /* onPress={updateSecureTextEntry} */>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={style.text}>Apellido</Text>
          <View style={style.searchSection}>
            <TextInput
              style={style.input}
              onChangeText={(e) => handleChange(e, "name")}
              name="name"
              defaultValue={lastName}
              required
            />
            <TouchableOpacity /* onPress={updateSecureTextEntry} */>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
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
            <TouchableOpacity /* onPress={updateSecureTextEntry} */>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <Text style={style.text}>Contraseña</Text>
          <View style={style.searchSection}>
            <TextInput
              style={style.input}
              onChangeText={(e) => handleChange(e, "password")}
              name="password"
              defaultValue={password}
              required
            />
            <TouchableOpacity /* onPress={updateSecureTextEntry} */>
              <MaterialCommunityIcons name="pencil" size={24} color="black" />
            </TouchableOpacity>
          </View>

          <View>
            <Button
              style={style.boton}
              onPress={() => handleSubmit()}
              title="Guardar cambios"
              color="#841584"
              alert
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
