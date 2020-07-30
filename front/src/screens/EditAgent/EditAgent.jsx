import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { style } from "./style.js";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default ({
  handleSubmit,
  handleChange,
  name,
  address,
  cuil,
  navigation,
  image,
}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={style.container}>
        <Text style={style.containerTitle}>Datos de tu Negocio</Text>
        
        <View style={style.searchSection}>
        <Text style={style.text}>Nombre del negocio</Text>

          <TextInput
            style={style.input}
            onChangeText={(e) => handleChange(e, "name")}
            name="name"
            placeholder="Ingrese el nombre del establecimiento"
            defaultValue={name}
            required
          />
          {/* <TouchableOpacity onPress={updateSecureTextEntry} 
            style={{ marginRight: 10, marginRight: 5 }}
          >
            <MaterialCommunityIcons name="pencil" size={20} color="black" />
          </TouchableOpacity> */}
        </View>
        
        <View style={style.searchSection}>
        <Text style={style.text}>Direccion</Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => handleChange(e, "address")}
            name="address"
            placeholder="Indique la dirección"
            defaultValue={address}
            required
          />
          {/* <TouchableOpacity onPress={updateSecureTextEntry} 
            style={{ marginRight: 10, marginRight: 5 }}
          >
            <MaterialCommunityIcons name="pencil" size={20} color="black" />
          </TouchableOpacity> */}
        </View>
        
        <View style={style.searchSection}>
        <Text style={style.text}>CUIL</Text>
          <TextInput
            style={style.input}
            onChangeText={(e) => handleChange(e, "cuil")}
            name="cuil"
            placeholder="Ingrese su numero de CUIL"
            defaultValue={cuil}
            required
          />
        </View>

        <View>
          <Image style={style.image} source={{ uri: image }} />
        </View>

        <Text style={style.textOpenCamera}>Subir foto</Text>

        <TouchableOpacity
          style={style.openCamera}
          title="Open Camera"
          onPress={() => {
            navigation.navigate("OpenCamera", { edit: true });
          }}
        >
        <Image source={require('../../../assets/iconos/openCamera.png')}/>  
        </TouchableOpacity>
 
          {/* <MaterialIcons
            name="camera-alt"
            size={27}
            color="white"
            style={style.foto}
          /> */}
          <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>

        <TouchableOpacity
          style={style.confirmar}
          onPress={() => handleSubmit()}
        >
          <Text style={style.textConfirmar}>GUARDAR CAMBIOS</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
