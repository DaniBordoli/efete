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
import OpenCamera from "../camera/OpenCameraContainer.jsx";
import { fondoColor, inputDark, headerColor } from "../../Common/constans.js";
import { GOOGLE_LOCATION_API_KEY } from "@env";

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
  view,
  mode,
}) => {
  return (
    <ScrollView 
    keyboardShouldPersistTaps="always"
    style={style.mainContainer}
    >
      <Text style={style.containerTitle}>Datos de tu Negocio</Text>
      <View style={style.container}>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: 10,
            marginBottom: 10,
            fontSize: 15,
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
            query={{ key: GOOGLE_LOCATION_API_KEY }}
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
            keyboardType="numeric"
          />
        </View>
      </View>

      <Text style={style.textOpenCamera}>Subir foto</Text>

      {image !== "" ? (
        <View
        >
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

      <OpenCamera view={view} navigation={navigation} />
      <View style={{ alignItems: "center" }}>
        <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>
      </View>
      
      <View>
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
