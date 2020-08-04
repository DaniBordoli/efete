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
import { fondoColor, inputDark, headerColor } from "../../Common/constans.js";

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
  mode,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
      <Text style={style.containerTitle}>Datos de tu Negocio</Text>
      <View style={style.container}>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: 10,
            marginBottom: 10,
            fontSize:15,
            color: mode ? "#424242" : "white",
          }}
        >
          Direccion
        </Text>
        <View
          style={{
            backgroundColor: mode ? "white" : inputDark,
            color: mode ? "black" : "white",
            width: "95%",
            flexDirection: "row",
            marginBottom: 25,
            borderRadius: 5,
          }}
        >
          <GooglePlacesAutocomplete
            styles={{
              textInputContainer: {
                width: "100%",
                alignSelf: "center",
                color: mode ? "black" : "white",
                elevation: 3,
                backgroundColor: mode ? "white" : inputDark,
                borderRadius: 5,
              },
              textInput: {
                color: mode ? "black" : "white",
                backgroundColor: mode ? "white" : inputDark,
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
          <Text style={mode ? style.title : style.titleDark}>
            Nombre del negocio
          </Text>

          <TextInput
            onChangeText={(e) => handleChange(e, "name")}
            name="name"
            placeholder="Editar Establecimiento"
            defaultValue={name}
            style={mode ? style.input : style.inputDark}
            required
          />
        </View>

        <View>
          <Text style={mode ? style.title : style.titleDark}>CUIL</Text>

          <TextInput
            onChangeText={(e) => handleChange(e, "cuil")}
            name="cuil"
            style={mode ? style.input : style.inputDark}
            defaultValue={cuil}
            required
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", alignSelf: "center" , marginLeft:"10%"}}>
        {image !== "" ? (
          <View style={{ alignSelf: "center" }}>
            <Image
              style={mode ? style.image : style.imageDark}
              source={{ uri: image }}
            />
          </View>
        ) : (
          <View style={{ alignSelf: "center" }}>
            <Text style={style.text}>La imagen se está cargando</Text>
          </View>
        )}

        <View style={{ marginTop:'2%', marginLeft: 15 }}>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            title="Open Camera"
            onPress={() => {
              navigation.navigate("OpenCamera", { edit: true });
            }}
          >
            <MaterialIcons
              name="edit"
              size={27}
              color="white"
              style={{ backgroundColor: headerColor, borderRadius: 20 , padding:5}}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={style.confirmar} onPress={() => handleSubmit()}>
        <Text style={style.textConfirmar}>GUARDAR CAMBIOS</Text>
      </TouchableOpacity>
    </View>
  );
};
