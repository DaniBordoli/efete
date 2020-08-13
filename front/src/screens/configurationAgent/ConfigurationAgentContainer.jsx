import React from "react";
import { useSelector } from "react-redux";
import ConfigurationAgent from "./ConfigurationAgent";

const ConfigurationAgentContainer = ({ route, navigation }) => {
  const mode = useSelector((state) => state.users.mode);
  const agent = route.params.agent;

  return (
    <ConfigurationAgent mode={mode} agent={agent} navigation={navigation} />
  );
};

export default ConfigurationAgentContainer;
