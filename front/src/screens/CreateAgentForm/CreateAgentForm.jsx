import React from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { YellowBox } from "react-native";
import { style } from "./style";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import OpenCamera from "../camera/OpenCameraContainer";
import { GOOGLE_LOCATION_API_KEY } from "@env";

const CreateAgentForm = ({
  handlerCuil,
  handlerAddress,
  handlerName,
  handlerSubmit,
  navigation,
  fotos,
  name,
  address,
  cuil,
  notifyChange,
  validUri,
  validCuil,
  validAdress,
  validName,
  validUbicacion,
}) => {
  return (
    <ScrollView keyboardShouldPersistTaps="always" style={style.mainContainer}>
      <Text style={style.containerTitle}>Agregar Establecimiento</Text>
      <View style={style.container}>
        <Text
          style={{
            alignSelf: "flex-start",
            marginBottom: 10,
            color: "#424242",
          }}
        >
          Dirección
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
              },
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
            query={{ key: GOOGLE_LOCATION_API_KEY }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
          />
        </View>

        <View>
          <Text style={style.title}>Nombre</Text>
          <TextInput
            style={style.input}
            onChangeText={(text) => handlerName(text)}
            placeholder="Ingrese el nombre del establecimiento"
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
      <View>
        <Text style={style.textOpenCamera}>Subir foto</Text>
      </View>
      <OpenCamera navigation={navigation} view="CreateAgentForm" />
      <View>
        <TouchableOpacity
          disabled={
            !(
              validName &&
              validAdress &&
              validCuil &&
              validUri &&
              validUbicacion
            )
          }
          style={
            validName && validAdress && validCuil && validUri && validUbicacion
              ? style.confirmar
              : style.confirmarDisabled
          }
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
      </View>
    </ScrollView>
  );
};

export default CreateAgentForm;
