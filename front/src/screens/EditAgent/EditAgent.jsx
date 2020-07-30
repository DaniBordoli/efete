import React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView
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
  notifyChange
}) => {

  return (
    <ScrollView>
      
      <View style={style.container}>
        <Text style={style.containerTitle}>Datos de tu Negocio</Text>
     
        <View style={style.searchSection}>
         <Text style={style.text}>Direccion</Text>
           <GooglePlacesAutocomplete
            styles={{
              textInputContainer: {
                width: "100%",
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
              }
            }}
            enablePoweredByContainer={false}
            placeholder="Buscar direccion"
            returnKeyType={"search"}
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

    
      <View style={style.searchSection}>
        <Text style={style.text}>Nombre del negocio</Text>
        
        <View style={style.input}>
          <TextInput
            onChangeText={(e) => handleChange(e, "name")}
            name="name"
            placeholder="Ingrese el nombre del establecimiento"
            defaultValue={name}
            required
          />
          <MaterialIcons
            name="edit"
            size={27}
            color="black"
          />
        </View>
      </View>

        

        
        <View style={style.searchSection}>
        <Text style={style.text}>CUIL</Text>
        
        <View style={style.input}>
          <TextInput
            onChangeText={(e) => handleChange(e, "cuil")}
            name="cuil"
            placeholder="Ingrese su numero de CUIL"
            defaultValue={cuil}
            required
          /> 
         <MaterialIcons
            name="edit"
            size={27}
            color="black"
          />
        </View>
       </View> 

        <View>
          <Image style={style.image} source={{ uri: image }} />
        </View>

        <Text style={style.textOpenCamera}>Subir foto</Text>

        <TouchableOpacity
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
