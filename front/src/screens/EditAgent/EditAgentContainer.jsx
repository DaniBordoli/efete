import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import EditAgent from "./EditAgent";
import { useDispatch, useSelector } from "react-redux";
import { editAgent, fetchAgent } from "../../redux/store/actions/agents";

export default ({ navigation }) => {
  const agentInfo = useSelector((state) => state.agents.agent);

  const [agent, setAgent] = useState(agentInfo);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.users.user._id);

  useEffect(() => {
    dispatch(fetchAgent(userId));
  }, []);

  function handleChange(e, name) {
    setAgent({ ...agent, [name]: e });
  }

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
    <EditAgent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={agent.name}
      address={agent.address}
      CUIL={agent.CUIL}
      navigation={navigation}
    />
  );
};
