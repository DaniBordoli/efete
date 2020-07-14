import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { newTransactionValue } from "../../redux/store/actions/transactions";
import SelectOtherAmount from "./SelectOtherAmount";
import { useDispatch } from "react-redux";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleValue = (value) => {
    setValue(value);
  };

  const handleSubmit = () => {
    dispatch(newTransactionValue(Number(value)));
  };

  return (
    <View>
      <SelectOtherAmount
        handleValue={handleValue}
        handleSubmit={handleSubmit}
        navigation={navigation}
        value={value}
      />
    </View>
  );
};
