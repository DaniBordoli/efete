import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  { useEffect } from "react";
import { getTransactions } from "../../redux/store/actions/transactions";
import UserHome from "./userHome";
import { View } from "react-native";

export default () => {
  const dispatch = useDispatch();

  const transactions = useSelector((state) => state.transactions.transactions);

  useEffect(() => {
    dispatch(getTransactions());
  }, []);


  return (
    <View>
      <UserHome transactions={transactions} />
    </View>
  );
};
