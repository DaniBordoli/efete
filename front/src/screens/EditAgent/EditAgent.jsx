import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { style } from "./style.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ handleSubmit, handleChange, name, address, CUIL, navigation }) => {
  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.container}>

          <Text style={style.containerTitle}>Datos de tu Negocio</Text>
          
          <View>
          <Text style={style.title}>Nombre del negocio</Text>
            <TextInput
              style={style.input}
              onChangeText={(e) => handleChange(e, "name")}
              name="name"
              placeholder="Ingrese el nombre del establecimiento"
              defaultValue={name}
              required
            />
          </View>

          <View>
          <Text style={style.title}>Direccion</Text>
            <TextInput
              style={style.input}
              onChangeText={(e) => handleChange(e, "address")}
              name="address"
              placeholder="Indique la dirección"
              defaultValue={address}
              required
            />
          </View>

          <View>
          <Text style={style.title}>CUIL</Text>
            <TextInput
              style={style.input}
              editable={false}
              placeholder="Ingrese su numero de CUIL"
              selectTextOnFocus={false}
              defaultValue={`${CUIL}`}
              disable
            />
          </View>

            <TouchableOpacity
            style={style.openCamera}
            title="Open Camera"
            onPress={() => {
              navigation.navigate("OpenCamera");
            }}
            >
            <Text style={style.textOpenCamera}>Subir foto</Text>
            <Image 
            source={require("../../../assets/iconos/openCamera.png")}
            />
            <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>
          </TouchableOpacity>
      
          <TouchableOpacity
            style={style.confirmar}
            onPress={() => handleSubmit()}
            title="Guardar cambios"
            alert
          >
          <Text style={style.textConfirmar}>CONFIRMAR</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
