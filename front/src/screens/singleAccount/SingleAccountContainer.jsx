import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleAccount from "./SingleAccount";
import { View } from "react-native";
import {
  deleteAccounts,
  fetchUserSingleAccount,
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
    // dispatch(fetchUserAccounts(user._id))
  }, []);

  const handleDelete = (accountId) => {
    // dispatch(deleteAccounts(accountId, "5f0f14c1830a243382d6c6aa"));
    dispatch(deleteAccounts(accountId, user._id));
  };

  return (
    <View>
      <SingleAccount
        account={account}
        navigation={navigation}
        handleDelete={handleDelete}
        loading={loading}
      />
    </View>
  );
};
