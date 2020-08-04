import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Linking } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import {
  headerColor,
  buttonColor,
  grisClaro,
  rojo,
} from "../../Common/constans";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";
import { mapStyle } from "./mapDark";
import Modal from "react-native-modal";
import { style } from "../userHome/style";

export default ({
  ubicacion,
  agentes,
  navigation,
  markers,
  value,
  mode,
  loading,
}) => {
  const [index, setIndex] = useState(null);
  console.log(":::::::::::::::::::::::::::::::::INDEEEX: ", index);

  const onCarouselItemChange = (index) => {
    let location = agentes[index];
    setIndex(agentes[index]);

    this._map.animateToRegion({
      latitude: location.ubicacion.latitude,
      longitude: location.ubicacion.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    markers[index].showCallout();
  };

  const onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.ubicacion.latitude,
      longitude: location.ubicacion.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035,
    });

    this._carousel.snapToItem(index);
  };

  return loading ? (
    <View style={styles.container}>
      <MapView
        customMapStyle={mode ? null : mapStyle}
        showsMyLocationButton={true}
        ref={(map) => (this._map = map)}
        initialRegion={ubicacion}
        showsUserLocation={true}
        style={styles.mapStyle}
      >
        {agentes &&
          agentes.map((agente, index) => (
            <Marker
              /* onPress={ navigation.navigate("Scanner", {
            agentId: agentId,
            value: route.params.value,
            destinationAccount: destinationAccount,
          })} */

              icon={require("../../../assets/iconos/marker.png")}
              key={agente._id}
              ref={(ref) => (markers[index] = ref)}
              onPress={() => onMarkerPressed(agente, index)}
              coordinate={{
                latitude: agente.ubicacion
                  ? agente.ubicacion.latitude
                  : -34.651775,
                longitude: agente.ubicacion
                  ? agente.ubicacion.longitude
                  : -58.642081,
              }}
              title={agente.name}
              /* description={agente.address} */
            />
          ))}
      </MapView>
      <View style={styles.carousel}>
        {agentes && agentes.length > 0 ? (
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={
              agentes
                ? agentes
                : [
                    {
                      address: "No existe ningun Agente",
                      name: "No existe ningun Agente",
                    },
                  ]
            }
            renderItem={({ item }) => {
              console.log(":::::::::::::::::::::::::::::::::ITEEEM: ", item);
              return (
                <View
                  style={mode ? styles.cardContainer : styles.cardContainerDark}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <FontAwesome5
                        name="store"
                        size={30}
                        color={headerColor}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "column-reverse",
                        flex: 5,
                        alignItems: "flex-start",
                      }}
                    >
                      <View style={{ alignSelf: "center", paddingRight: 5 }}>
                        <Text style={styles.textoAddress}>
                          {item.address.split(",")[0]}
                        </Text>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignSelf: "center" }}
                      >
                        <Text
                          style={{
                            fontSize: 18,
                            fontFamily: "nunito",
                            alignSelf: "center",
                            color: mode ? "black" : grisClaro,
                          }}
                        >
                          Nombre:
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            marginLeft: 5,
                            alignSelf: "center",
                            color: mode ? "black" : grisClaro,
                          }}
                        >
                          {item.name}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <View style={mode ? styles.hr : styles.hrDark} />

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "flex-end",
                      paddingBottom: 2,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Button
                        titleStyle={{
                          fontSize: 14,
                          color: mode ? buttonColor : "#B8B6FD",
                        }}
                        buttonStyle={{
                          width: 109,
                          height: 39,
                          alignSelf: "center",
                          backgroundColor: mode ? "white" : "#131212",
                          borderColor: mode ? buttonColor : "#B8B6FD",
                          borderWidth: 1,
                        }}
                        title="COMO LLEGAR"
                        onPress={() =>
                          Linking.openURL(
                            `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${item.ubicacion.latitude}, ${item.ubicacion.longitude}`
                          )
                        }
                      />
                    </View>

                    <View style={{ flex: 1 }}>
                      <Button
                        onPress={() => {
                          navigation.navigate("confirmValue", { value, item });
                        }}
                        titleStyle={{ fontSize: 14 }}
                        buttonStyle={{
                          width: 109,
                          height: 39,
                          alignSelf: "center",
                          backgroundColor: mode ? buttonColor : headerColor,
                        }}
                        title="CONFIRMAR"
                      />
                    </View>
                  </View>
                </View>
              );
            }}
            sliderWidth={Dimensions.get("window").width}
            itemWidth={300}
            removeClippedSubviews={false}
            onSnapToItem={(index) => onCarouselItemChange(index)}
          />
        ) : (
          <View style={styles.containerM}>
            <Modal
              isVisible={true}
              backdropColor={headerColor}
              backdropOpacity={1}
              animationIn={"zoomInDown"}
              animationOut={"zoomOutUp"}
              animationInTiming={1000}
              animationOutTiming={1000}
              backdropTransitionInTiming={1000}
              backdropTransitionOutTiming={1000}
            >
              <View style={styles.modalContent}>
                <MaterialCommunityIcons
                  name="map-marker-alert-outline"
                  size={60}
                  color={rojo}
                />
                <Text style={styles.texto}>NO EXISTEN AGENTES EN TU ZONA</Text>
                <Button
                  onPress={() => {
                    navigation.navigate("User");
                  }}
                  titleStyle={{ color: buttonColor }}
                  buttonStyle={styles.boton}
                  title="VOLVER"
                />
              </View>
            </Modal>
          </View>
        )}
      </View>
    </View>
  ) : (
    <Load />
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },

  carousel: {
    position: "absolute",
    bottom: 0,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "white" /* rgba(0, 0, 0, 0.6) */,
    height: 150,
    width: 300,
    padding: 15,
    borderRadius: 10,
  },
  cardContainerDark: {
    backgroundColor: "#131212" /* rgba(0, 0, 0, 0.6) */,
    height: 150,
    width: 300,
    padding: 15,
    borderRadius: 10,
  },

  textoAddress: {
    color: "grey",
    fontSize: 15,
    alignSelf: "center",
  },
  texto: {
    fontSize: 25,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "95%",
  },
  hrDark: {
    borderBottomColor: headerColor,
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "95%",
  },
  containerM: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 12,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  boton: {
    marginBottom: 10,
    width: 150,
    height: 40,
    borderColor: buttonColor,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});

