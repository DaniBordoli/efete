import React from "react";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import CreatedAgentOk from "./createdAgentOk";
import { useSelector } from "react-redux";
import { style } from "./style";

const CreatedAgentOkContainer = ({ navigation }) => {
  const agent = useSelector((state) => state.agents.newStore);
  return <CreatedAgentOk agent={agent} navigation={navigation} />;
};

export default CreatedAgentOkContainer;
