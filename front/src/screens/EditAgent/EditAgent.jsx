import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { style } from "./style.js";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default ({
  handleSubmit,
  handleChange,
  name,
  address,
  cuil,
  navigation,
  image,
  handlerAddress,
  notifyChange,
}) => {
  return (
    <View style={{ flex: 1 }}>
      

      
      <Text style={style.containerTitle}>Datos de tu Negocio</Text>
      <View style={style.container}>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: 10,
            marginBottom: 10,
            color: "#424242",
          }}
        >
          Direccion
        </Text>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            flexDirection: "row",
            marginBottom: 18,
          }}
        >
        <GooglePlacesAutocomplete
          styles={{
            textInputContainer: {
              width: "95%",
              alignSelf: "center",
              elevation: 3,
              backgroundColor: "white",
              borderRadius: 5,
            },
            textInput: {
              marginBottom: 0,
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              height: "100%",
            },
          }}
          enablePoweredByContainer={false}
          placeholder="Editar Ubicacion"
          returnKeyType={"search"}
          // required
          listViewDisplayed="auto"
          fetchDetails={true}
          onPress={(data, detail = null) => {
            notifyChange(detail.geometry.location);
            handlerAddress(data);
          }}
          query={{ key: "AIzaSyBV-TT8w7N3TC9LDFGIQOk9BmN1iX10arg" }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={200}
        />
    </View>

        <View>
          <Text style={style.title}>Nombre del negocio</Text>

          
            <TextInput
              onChangeText={(e) => handleChange(e, "name")}
              name="name"
              placeholder="Editar Establecimiento"
              defaultValue={name}
              style={style.input}
              required
            />
          
        </View>

        <View >
          <Text style={style.title}>CUIL</Text>

         
            <TextInput
              onChangeText={(e) => handleChange(e, "cuil")}
              name="cuil"
              style={style.input}
              defaultValue={cuil}
              required
            />
       
        </View>
      </View>
      
      
      
      {image !== "" ? (
        <View style={{alignSelf:'center'}}>
          <Image style={style.image} source={{ uri: image }} />
        </View>
      ) : (
        <View style={{alignSelf:'center'}}>
          <Text style={style.text}>La imagen se está cargando</Text>
        </View>
      )}

      <Text style={style.textOpenCamera}>Subir foto</Text>

      <TouchableOpacity
      style={{alignSelf:'center'}}
        title="Open Camera"
        onPress={() => {
          navigation.navigate("OpenCamera", { edit: true });
        }}
      >
        <MaterialIcons
          name="camera-alt"
          size={27}
          color="white"
          style={style.openCamera}
        />
      </TouchableOpacity>

      <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>

      <TouchableOpacity style={style.confirmar} onPress={() => handleSubmit()}>
        <Text style={style.textConfirmar}>GUARDAR CAMBIOS</Text>
      </TouchableOpacity>
    </View>
    
  );
};
