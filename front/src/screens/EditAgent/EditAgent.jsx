import React from "react";
import { View, Text, TextInput, Button, Image } from "react-native";
import { style } from "./style.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({
  handleSubmit,
  handleChange,
  name,
  address,
  CUIL,
  navigation,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      <Text style={style.movimientos}>Datos de tu Negocio</Text>

      <Text style={style.text}>Nombre del negocio</Text>
      <View style={style.searchSection}>
        <TextInput
          style={style.input}
          onChangeText={(e) => handleChange(e, "name")}
          name="name"
          defaultValue={name}
          required
        />
        <TouchableOpacity /* onPress={updateSecureTextEntry} */>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={style.text}>Direccion</Text>
      <View style={style.searchSection}>
        <TextInput
          style={style.input}
          onChangeText={(e) => handleChange(e, "address")}
          name="address"
          defaultValue={address}
          required
        />
        <TouchableOpacity /* onPress={updateSecureTextEntry} */>
          <MaterialCommunityIcons name="pencil" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={style.text}>CUIL</Text>
      <View style={style.searchSection}>
        <TextInput
          editable={false}
          selectTextOnFocus={false}
          style={style.input}
          defaultValue={`${CUIL}`}
          disable
        />
      </View>

      <Button
        style={style.boton}
        onPress={() => handleSubmit()}
        title="Guardar cambios"
        alert
      />
    </View>
  );
};
