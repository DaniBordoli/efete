import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleAccount from "./SingleAccount";
import {
  deleteAccounts,
  fetchUserSingleAccount,
  setMainAccount,
  fetchMainAccount,
  deleteMainAccount,
} from "../../redux/store/actions/accounts";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);
  const user = useSelector((state) => state.users.user);
  const account = useSelector((state) => state.accounts.account);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchUserSingleAccount(route.params.account._id)).then(() => {
      setLoading(true);
    });
  }, []);

  const handleDelete = (accountId) => {
    console.log("WHAT");
    account.mainAccount
      ? dispatch(deleteMainAccount(accountId))
      : dispatch(deleteAccounts(accountId, user._id));
    navigation.navigate("Accounts");
  };

  const handleMainAccount = (accountId) => {
    dispatch(setMainAccount(accountId, user._id))
      .then(() => dispatch(fetchMainAccount(user._id)))
      .then(() => navigation.navigate("Accounts"));
  };

  return (
    <SingleAccount
      account={account}
      navigation={navigation}
      handleDelete={handleDelete}
      loading={loading}
      handleMainAccount={handleMainAccount}
      mode={mode}
    />
  );
};
