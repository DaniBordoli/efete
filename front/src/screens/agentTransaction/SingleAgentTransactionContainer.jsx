import React from "react";
import SingleAgentTransaction from "./SingleAgentTransaction";
import { View } from "react-native";

const SingleAgentTransactionContainer = ({ navigation, route }) => {
  return (
    <SingleAgentTransaction
      navigation={navigation}
      transaction={route.params.item}
    />
  );
};

export default SingleAgentTransactionContainer;
