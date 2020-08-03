import React from "react";
import { useSelector } from "react-redux";
import ConfirmAgentLoad from "./ConfirmAgentLoad";

const ConfirmAgentLoadContainer = () => {
  const mode = useSelector((state) => state.users.mode);

  const value = useSelector((state) => state.agents.agent.dailyAmount);

  return <ConfirmAgentLoad value={value} mode={mode} />;
};

export default ConfirmAgentLoadContainer;
