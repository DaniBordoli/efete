import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ConfirmValue from "./confirmValue";

const confirmValueContainer = ({ navigation, route }) => {
  console.log(route.params.index, "INDEX!!!");
  const agentes = useSelector((state) => state.agents.agents[0]);
  console.log('AGENEEEEEEEEEEEEEEEEEEEEETEEEEES:', agentes)
  return (
    <ConfirmValue
      navigation={navigation}
      value={route.params.value}
      agente={route.params.index}
      agenteUnico={agentes}
    />
  );
};

export default confirmValueContainer;
