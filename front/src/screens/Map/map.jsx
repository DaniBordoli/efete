import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";
import { headerColor, buttonColor } from "../../Common/constans";
import { Button } from "react-native-elements";

export default ({ ubicacion, agentes, navigation, markers, value }) => {
  const [index, setIndex] = useState(null);

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

  return (
    <View style={styles.container}>
      <MapView
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
        <Carousel
          ref={(c) => {
            this._carousel = c;
          }}
          data={agentes}
          renderItem={({ item }) => {
            return (
              <View style={styles.cardContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5 name="store" size={30} color={headerColor} />
                  <Text
                    style={{
                      marginLeft: 25,
                      fontSize: 15,
                      fontFamily: "nunito-bold",
                    }}
                  >
                    Nombre:
                  </Text>
                  <Text style={{ fontSize: 15, marginLeft: 5 }}>
                    {item.name}
                  </Text>
                </View>

                <View style={styles.hr} />

                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Text style={styles.textoAddress}>{item.address}</Text>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Button
                      onPress={() => {
                        navigation.navigate("confirmValue", { value, index });
                      }}
                      titleStyle={{ fontSize: 14 }}
                      buttonStyle={{
                        width: 100,
                        height: 39,
                        alignSelf: "center",
                        backgroundColor: buttonColor,
                      }}
                      title="Como llegar"
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
      </View>
    </View>
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

  textoAddress: {
    color: "black",
    fontSize: 12,
    alignSelf: "center",
    marginRight: 5,
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "95%",
  },
});
