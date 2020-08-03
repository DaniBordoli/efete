import React from "react";
import AllAgentTransactions from "./AllAgentTransactions";
import { useSelector } from "react-redux";

const AllAgentTransactionsContainer = ({ navigation, route }) => {
  
  const mode = useSelector(
    (state) => state.users.mode
  );
  return (
    <AllAgentTransactions
      navigation={navigation}
      agentTransactions={route.params.agentTransactions}
    />
  );
};

export default AllAgentTransactionsContainer;
