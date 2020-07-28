import React from "react";
import { useSelector } from "react-redux";
import TransactionOk from "./TransactionOk";

export default ({ navigation, route }) => {
  const user = useSelector((state) => state.users.user);

  const transaction = route.params.transaction;

  return <TransactionOk navigation={navigation} transaction={transaction} />;
};
