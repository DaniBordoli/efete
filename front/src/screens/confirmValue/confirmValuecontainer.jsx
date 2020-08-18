import React from "react";
import { useSelector } from "react-redux";
import ConfirmValue from "./confirmValue";

const confirmValueContainer = ({ navigation, route }) => {
  const mode = useSelector((state) => state.users.mode);
  const agentes = useSelector((state) => state.agents.agents[0]);

  return (
    <ConfirmValue
      navigation={navigation}
      value={route.params.value}
      agente={route.params.item}
      agenteUnico={agentes}
      mode={mode}
    />
  );
};

export default confirmValueContainer;
