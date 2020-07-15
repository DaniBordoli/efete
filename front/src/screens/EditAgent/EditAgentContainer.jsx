import React, { useState } from "react";
import { View, Alert } from "react-native";
import EditAgent from "./EditAgent";
import { useDispatch } from "react-redux";
import { editAgent } from "../../redux/store/actions/agents";

export default ({ navigation }) => {
  // tengo los datos hardcodeados, falta agregar un useselector para traer los datos del usuario logueado y agrgarlos en los useState
  // user.name ? user.name:'' (agregar este ternario para esperar al back que busque los datos de usuario?)
  const [agent, setAgent] = useState({
    name: "Open25",
    address: "Cochabamba 2678",
    CUIL: "3017263882",
    id: "5f0613df7611854c3595635a",
  });

  const dispatch = useDispatch();

  function handleChange(e, name) {
    setAgent({ ...agent, [name]: e });
  }

  // le harcodeo el id pero hay que traerlo con el useSelector del usuario logueado
  function handleSubmit() {
    if (agent.name.length > 0 && agent.address.length > 0) {
      dispatch(editAgent(agent));
      Alert.alert(
        "Datos actualizados",
        "Tus datos se actualiazaron correctamente",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert("Campo vacío", "Por favor completa todos los datos", [
        { text: "OK" },
      ]);
    }
  }

  return (
    <View>
      <EditAgent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        name={agent.name}
        address={agent.address}
        CUIL={agent.CUIL}
        navigation={navigation}
      />
    </View>
  );
};
