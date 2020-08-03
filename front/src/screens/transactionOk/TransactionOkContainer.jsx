import React from "react";
import { useSelector } from "react-redux";
import TransactionOk from "./TransactionOk";

export default ({ navigation, route }) => {
  const user = useSelector((state) => state.users.user);
  
  const mode = useSelector(
    (state) => state.users.mode
  );
  const transaction = route.params.transaction;

  return <TransactionOk mode={mode} navigation={navigation} transaction={transaction} />;
};
