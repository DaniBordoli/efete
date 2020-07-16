import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Accounts from "../accounts/Accounts";
import { View } from "react-native";
import {
  fetchUserAccounts,
  deleteAccounts,
} from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoader] = useState(false);

  const accountsUser = useSelector((state) => state.accounts.accounts);
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchUserAccounts("5f0f14c1830a243382d6c6aa"))
      // dispatch(fetchUserAccounts(user._id))
      .then(() => {
        setLoader(true);
      });
  }, []);

  const handleDelete = (accountId) => {
    dispatch(deleteAccounts(accountId, "5f0f14c1830a243382d6c6aa"));
    //dispatch(deleteAccounts(accountId, user._id))
  };

  return (
    <View>
      <Accounts
        navigation={navigation}
        accountsUser={accountsUser}
        loading={loading}
        handleDelete={handleDelete}
      />
    </View>
  );
};
