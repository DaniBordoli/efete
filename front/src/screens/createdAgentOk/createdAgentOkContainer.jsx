import React from "react";
import CreatedAgentOk from "./createdAgentOk";
import { useSelector } from "react-redux";

const CreatedAgentOkContainer = ({ navigation, route }) => {
  const agent = useSelector((state) => state.agents.newAgent);
  
  const mode = useSelector(
    (state) => state.users.mode
  );

  return (
    <CreatedAgentOk
      agent={agent}
      navigation={navigation}
      foto={route.params.fotos}
      name={route.params.name}
      address={route.params.address}
      cuil={route.params.cuil}
      mode={mode}
    />
  );
};

export default CreatedAgentOkContainer;
