import React from "react";
import AllUserTransactions from "./AllUserTransactions";
import { View } from "react-native";

const AllUserTransactionsContainer = ({ navigation, route }) => {
  return (
    <View>
      <AllUserTransactions
        navigation={navigation}
        userTransactions={route.params.userTransactions}
      />
    </View>
  );
};

export default AllUserTransactionsContainer;
