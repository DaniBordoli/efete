import React from "react";
import AllAgentTransactions from "./AllAgentTransactions";
import { View } from "react-native";

const AllAgentTransactionsContainer = ({ navigation, route }) => {
  return (
    <AllAgentTransactions
      navigation={navigation}
      agentTransactions={route.params.agentTransactions}
    />
  );
};

export default AllAgentTransactionsContainer;
