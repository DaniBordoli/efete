import React from "react";
import AllUserTransactions from "./AllUserTransactions";
import { View } from "react-native";

const AllUserTransactionsContainer = ({ navigation, route }) => {
  return (
    <AllUserTransactions
      navigation={navigation}
      userTransactions={route.params.userTransactions}
    />
  );
};

export default AllUserTransactionsContainer;
