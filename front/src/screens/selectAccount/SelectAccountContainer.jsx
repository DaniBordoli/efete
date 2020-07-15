import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAccounts } from "../../redux/store/actions/accounts";
import { createTransaction } from "../../redux/store/actions/transactions";
import SelectAccount from "./SelectAccount";

import { View } from "react-native";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUserAccounts(user._id));
    dispatch(fetchUserAccounts("5f0f14c1830a243382d6c6aa")).then(() => {
      setLoading(true);
    });
  }, []);

  const userAccounts = useSelector((state) => state.accounts.accounts);
  const user = useSelector((state) => state.users.user);

  const [selectedAccount, setSelectedAccount] = useState({});
  const [loading, setLoading] = useState(false);

  const handleAccount = (account) => {
    setSelectedAccount(account);
  };

  const handleSubmit = () => {
    dispatch(
      createTransaction({
        amount: route.params.value,
        originAccount: selectedAccount._id,
        // user: user._id,
        // aget: route.params.agent
        user: "5f0f14c1830a243382d6c6aa",
        agent: "5f0632f8d75672228cc337c4",
      })
    ).then((data) => {
      navigation.navigate("TransactionOk");
    });
  };

  return (
    <View>
      <SelectAccount
        selectedAccount={selectedAccount}
        userAccounts={userAccounts}
        handleValue={handleAccount}
        handleSubmit={handleSubmit}
        navigation={navigation}
        transactionValue={route.params.value}
        loading={loading}
      />
    </View>
  );
};
