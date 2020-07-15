import React from "react";
import AllAgentTransactions from "./AllAgentTransactions";
import { View } from "react-native";

const AllAgentTransactionsContainer = ({ navigation, route }) => {
  return (
    <View>
      <AllAgentTransactions
        navigation={navigation}
        agentTransactions={route.params.agentTransactions}
      />
    </View>
  );
};

export default AllAgentTransactionsContainer;
