import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SingleAccount from "./SingleAccount";
import { View } from "react-native";
import { fetchUserAccounts } from "../../redux/store/actions/accounts";

export default ({ navigation, route }) => {
  console.log("CUENTA PASADA POR ROUTE", route.params.account);
  const dispatch = useDispatch();
  const [loading, setLoader] = useState(false);

  const accountsUser = useSelector((state) => state.accounts.accounts);

  useEffect(() => {
    dispatch(fetchUserAccounts("5f0f14c1830a243382d6c6aa")).then(() => {
      setLoader(true);
    });
  }, []);

  return (
    <View>
      <SingleAccount account={route.params.account} navigation={navigation} />
    </View>
  );
};
