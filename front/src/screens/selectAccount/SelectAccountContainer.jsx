import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAccounts } from "../../redux/store/actions/accounts";
import SelectAccount from "./SelectAmount";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    useDispatch(fetchUserAccounts());
  });

  const userAccounts = useSelector((state) => state.accounts.accounts);

  const [selectedAccount, setSelectedAccount] = useState({});

  const handleAccount = (account) => {
    setSelectedAccount(account);
  };

  const handleSubmit = () => {
    dispatch(newTransactionValue(selectedAccount));
  };

  return (
    <View>
      <SelectAccount
        userAccounts={userAccounts}
        handleValue={handleAccount}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    </View>
  );
};
