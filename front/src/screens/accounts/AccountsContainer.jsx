import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Accounts from "../accounts/Accounts";
import {
  fetchUserAccounts,
  deleteAccounts,
  fetchMainAccount,
  deleteMainAccount,
} from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoader] = useState(false);

  const mode = useSelector((state) => state.users.mode);
  const accountsUser = useSelector((state) => state.accounts.accounts);
  const user = useSelector((state) => state.users.user);
  const mainAccount = useSelector((state) => state.accounts.mainAccount);

  useEffect(() => {
    dispatch(fetchUserAccounts(user._id))
      .then(() => {
        dispatch(fetchMainAccount(user._id));
      })
      .then(() => {
        setLoader(true);
      });
  }, []);

  const handleDelete = (accountId) => {
    console.log("ELIMINA CUENTA");
    dispatch(deleteAccounts(accountId, user._id));
  };

  const handleMainDelete = (accountId) => {
    console.log("ELIMINA MAIN");
    dispatch(deleteMainAccount(accountId));
  };

  return (
    <Accounts
      navigation={navigation}
      accountsUser={accountsUser}
      loading={loading}
      handleDelete={handleDelete}
      mainAccount={mainAccount}
      handleMainDelete={handleMainDelete}
      mode={mode}
    />
  );
};
