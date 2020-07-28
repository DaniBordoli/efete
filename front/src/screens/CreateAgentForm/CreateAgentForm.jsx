import React from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { style } from "./style";
import { MaterialIcons } from "@expo/vector-icons";
import storage from "../../firebase/index";

const CreateAgentForm = ({
  handlerDailyAmount,
  handlerCuil,
  handlerAddress,
  handlerName,
  handlerSubmit,
  navigation,
  fotos,
  name,
  address,
  cuil,
}) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={style.containerTitle}>Agregar Establecimiento</Text>
      <View style={style.container}>
        <View>
          <Text style={style.title}>Nombre</Text>
          <TextInput
            style={style.input}
            onChangeText={(text) => handlerName(text)}
            placeholder="Ingrese el nombre del establecimiento"
          />
        </View>

        <View>
          <Text style={style.title}>Dirección</Text>
          <TextInput
            style={style.input}
            onChangeText={(text) => handlerAddress(text)}
            placeholder="Indique la dirección"
          />
        </View>

        <View>
          <Text style={style.title}>CUIL</Text>
          <TextInput
            keyboardType="numeric"
            style={style.input}
            onChangeText={(num) => handlerCuil(num)}
            placeholder="Ingrese su numero de CUIL"
          />
        </View>
      </View>

      {fotos ? <Image style={style.image} source={{ uri: fotos }} /> : null}

      <TouchableOpacity
        style={style.openCamera}
        title="Open Camera"
        onPress={() => {
          navigation.navigate("OpenCamera");
        }}
      >
        <Text style={style.textOpenCamera}>Subir foto</Text>
        <MaterialIcons
          name="camera-alt"
          size={27}
          color="white"
          style={style.foto}
        />
        <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.confirmar}
        title="Confirmar"
        onPress={() => {
          handlerSubmit();
          navigation.navigate("createdAgentOk", {
            fotos: fotos,
            name: name,
            address: address,
            cuil: cuil,
          });
        }}
      >
        <Text style={style.textConfirmar}>CONFIRMAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreateAgentForm;
