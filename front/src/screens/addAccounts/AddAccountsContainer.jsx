import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import { View } from "react-native";
import { addAccounts } from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);

  const dispatch = useDispatch();

  const [name, setNameAccount] = useState("");
  const handleNameAccount = (name) => {
    setNameAccount(name);
  };

  const [cbu, setCbu] = useState("");
  const handleCbu = (cbu) => {
    setCbu(cbu);
  };

  const [accountNumber, setAccountNumber] = useState("");
  const handleAccountNumber = (accountNumber) => {
    setAccountNumber(accountNumber);
  };

  const handleSubmit = () => {
    dispatch(addAccounts(name, cbu, accountNumber, user._id));
    // dispatch(addAccounts(name, cbu, accountNumber, "5f0f14c1830a243382d6c6aa"));
  };

  return (
    <View>
      <AddAccounts
        handleNameAccount={handleNameAccount}
        handleCbu={handleCbu}
        handleAccountNumber={handleAccountNumber}
        handleSubmit={handleSubmit}
        navigation={navigation}
        name={name}
        cbu={cbu}
        accountNumber={accountNumber}
      />
    </View>
  );
};
