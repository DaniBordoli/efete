import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { newTransactionValue } from "../../redux/store/actions/transactions";
import SelectAccount from "./SelectAmount";
import { useDispatch } from "react-redux";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect = () => {
    useDispatch();
  };

  const transactionValue = useSelector(
    (state) => state.transactions.transactionValue
  );

  const [value, setValue] = useState(0);

  const handleValue = (item) => {
    setValue(item);
  };

  const handleSubmit = () => {
    dispatch(newTransactionValue(value));
  };

  return (
    <View>
      <SelectAccount
        transactionValue={transactionValue}
        handleValue={handleValue}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </View>
  );
};
