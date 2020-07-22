import React from "react";
import { useSelector } from "react-redux";
import TransactionOk from "./TransactionOk";

import { View } from "react-native";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const transaction = useSelector((state) => state.transactions.transaction);

  return <TransactionOk navigation={navigation} transaction={transaction} />;
};
