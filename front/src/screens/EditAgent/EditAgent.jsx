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
  Dimensions,
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
      style={{
        ...style.mainContainer,
        backgroundColor: mode ? fondoColor : "black",
      }}
    >
      <Text style={style.containerTitle}>EDITAR TU NEGOCIO</Text>
      <View style={style.container}>
        <Text
          style={{
            alignSelf: "flex-start",
            marginLeft: "8%",
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
            width: Dimensions.get("window").width / 1.3,
            flexDirection: "row",
            marginBottom: 35,
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
                height: 50,
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
            placeholder={address}
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

      {image !== "" ? (
        <View>
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

      <OpenCamera 
      style={style.OpenCamera}
      view={view} 
      navigation={navigation} 
      />
      

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
