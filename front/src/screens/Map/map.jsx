
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export default ({ ubicacion, notifyChange, marked ,agentes, navigation}) => {
  console.log("MAAAAAAARKKKKKKKKKEEEEEEEED:", marked);
  console.log("AGEEEEEENTEEEEEEEEEEEESSSSS:", agentes);


  return (
    <View style={styles.container}>
      <MapView
      
        initialRegion={ubicacion}
        style={styles.mapStyle}
        showsUserLocation
      >
        {agentes && agentes.map((agente)=>(

          <Marker
          /* onPress={ navigation.navigate("Scanner", {
            agentId: agentId,
            value: route.params.value,
            destinationAccount: destinationAccount,
          })} */
          key={agente._id}
          coordinate={{
            latitude: agente.ubicacion ? agente.ubicacion.latitude: -34.651775,
            longitude: agente.ubicacion ? agente.ubicacion.longitude : -58.642081,
          }}
          title={agente.name}
          description={agente.address}
        />



        ))}
        
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    flex: 1,
  },
});
