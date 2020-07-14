import React, {useState} from "react";
import { useDispatch } from "react-redux";
import AddAccounts from "../accounts/AddAccounts";
import {View} from "react-native"


export default ({navigation}) => {
  const dispatch = useDispatch();

  const [account, setAccount] = useState('');

  const handleAccount = (account) => {
    setAccount(account);
  };

  const handleSubmit = () => {
    dispatch(newAccount(Number(account)));
  };

  return (
    <View>
      <AddAccounts
        handleAccount={handleAccount}
        handleSubmit={handleSubmit}
        navigation={navigation}
        account={account}
      />
    </View>
  );
};

