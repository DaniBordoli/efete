import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleAccount from "./SingleAccount";
import { View } from "react-native";
import {
  deleteAccounts,
  fetchUserSingleAccount,
  setMainAccount,
  fetchMainAccount,
} from "../../redux/store/actions/accounts";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const account = useSelector((state) => state.accounts.account);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchUserSingleAccount(route.params.account._id)).then(() => {
      setLoading(true);
    });
  }, []);

  const handleDelete = (accountId) => {
    dispatch(deleteAccounts(accountId, user._id))
    navigation.navigate("Accounts")
  };

  const handleMainAccount = (accountId) => {
    dispatch(setMainAccount(accountId, user._id))
    dispatch(fetchMainAccount(user._id))
    navigation.navigate("Accounts")
  };

  return (
    <SingleAccount
      account={account}
      navigation={navigation}
      handleDelete={handleDelete}
      loading={loading}
      handleMainAccount={handleMainAccount}
    />
  );
};
