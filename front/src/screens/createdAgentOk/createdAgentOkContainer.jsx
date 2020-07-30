import React from "react";
import CreatedAgentOk from "./createdAgentOk";
import { useSelector } from "react-redux";

const CreatedAgentOkContainer = ({ navigation, route }) => {
  const agent = useSelector((state) => state.agents.newAgent);

  return (
    <CreatedAgentOk
      agent={agent}
      navigation={navigation}
      foto={route.params.fotos}
      name={route.params.name}
      address={route.params.address}
      cuil={route.params.cuil}
    />
  );
};

export default CreatedAgentOkContainer;
