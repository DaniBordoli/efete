import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAccounts } from "../../redux/store/actions/accounts";
import {
  createTransaction,
  getUserTransactions,
} from "../../redux/store/actions/transactions";
import { changeDailyAmount } from "../../redux/store/actions/agents";
import SelectAccount from "./SelectAccount";

import { View } from "react-native";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchUserAccounts("5f0f14c1830a243382d6c6aa"))
    dispatch(fetchUserAccounts(user._id)).then(() => {
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
  //Esta hardocdeado el id del agente porque no tenemos el mapa para la selección. Una vez que se tenga el mapa, se pasa e ldato por route.params.
  const handleSubmit = () => {
    dispatch(
      createTransaction({
        amount: route.params.value,
        originAccount: selectedAccount._id,
        user: user._id,
        // agent: route.params.agent

        agent: "5f135f55aa3c333017f57cfa",
        destinationAccount: "5f135fe0217b94308c20992a",
      })
    )
      .then(() => {
        dispatch(
          changeDailyAmount({
            id: "5f135f55aa3c333017f57cfa",

            amount: route.params.value,
          })
        );
      })
      .then(() => {
        dispatch(getUserTransactions(user._id));
      })
      .then(() => {
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
        // handleAgentDailyAmount={handleAgentDailyAmount}
      />
    </View>
  );
};
