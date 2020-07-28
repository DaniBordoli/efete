import React, { useState, useEffect } from "react";
import * as Permissions from "expo-permissions";
import { useSelector, useDispatch } from "react-redux";
import Map from "../Map/map";
import { fetchAgents } from "../../redux/store/actions/agents";
import * as Location from "expo-location";

export default () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState(null);
  const [ubicacion, setUbicacion] = useState({});
  const [markers, setMarkers] = useState([]);

  /*  const getCoordsFromName = (loc) => {
    setUbicacion({ latitude: loc.lat, longitude: loc.lng });
  }; */

  const agentes = useSelector((state) => state.agents.agents);

  console.log("UBIIIIICAAAACIIOON:::::::::::::", ubicacion);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
        distanceInterval: 1,
        timeInterval: 1000,
      });

      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.045,
      };

      dispatch(fetchAgents());

      setRegion(region);
    })();
  }, []);

  return (
    <Map
      markers={markers}
      agentes={agentes}
      ubicacion={region}
      notifyChange={(loc) => getCoordsFromName(loc)}

      /* marked={ubicacion}*/
    />
  );
};
