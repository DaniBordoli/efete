import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import { useSelector, useDispatch } from "react-redux";
import Map from "../Map/map";
import { fetchAgents } from "../../redux/store/actions/agents";
import * as Location from "expo-location";

export default ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState(null);
  const [markers, setMarkers] = useState([]);

  /*  const getCoordsFromName = (loc) => {
    setUbicacion({ latitude: loc.lat, longitude: loc.lng });
  }; */

  const agentes = useSelector((state) => state.agents.agents);
  const [loading, setLoader] = useState(false);
  const mode = useSelector((state) => state.users.mode);

  const agentesConMonto = agentes.filter(
    (agente) => agente.dailyAmount >= route.params.value
  );

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        distanceInterval: 1,
        timeout: 20000,
        timeInterval: 1000,
      });

      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      };

      setRegion(region);
    })();
  }, []);

  useEffect(() => {
    dispatch(fetchAgents()).then(() => setLoader(true));
  }, []);

  return (
    <Map
      mode={mode}
      markers={markers}
      agentes={agentesConMonto}
      ubicacion={region}
      notifyChange={(loc) => getCoordsFromName(loc)}
      value={route.params.value}
      navigation={navigation}
      loading={loading}
    />
  );
};
