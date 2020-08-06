import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAccounts } from "../../redux/store/actions/accounts";
import {
  createTransaction,
  getUserTransactions,
} from "../../redux/store/actions/transactions";
import {
  changeDailyAmount,
  fetchAgent,
} from "../../redux/store/actions/agents";
import { editUserTransactions } from "../../redux/store/actions/users";
import SelectAccount from "./SelectAccount";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);
  useEffect(() => {
    dispatch(fetchUserAccounts(user._id)).then(() => {
      setLoading(true);
    });
  }, []);

  useEffect(() => {
    dispatch(fetchAgent(route.params.agentId));
  }, []);

  const userAccounts = useSelector((state) => state.accounts.accounts);
  const user = useSelector((state) => state.users.user);
  const agent = useSelector((state) => state.agents.agent);

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
        agent: route.params.agentId,
        destinationAccount: route.params.destinationAccount,
        cbu: route.params.cbu,
        originAccountCbu: selectedAccount.accountNumber,
      })
    )
      .then((res) => {
        const newTransaction = user.transactionsMade + 1;
        dispatch(
          editUserTransactions({
            _id: user._id,
            transactionsMade: newTransaction,
          })
        );
        navigation.navigate("TransactionOk", { transaction: res.transaction });
      })
      .then(() => {
        dispatch(
          changeDailyAmount({
            id: route.params.agentId,

            amount: route.params.value,
          })
        );
      })
      .then(() => {
        dispatch(getUserTransactions(user._id));
      });
  };

  return (
    <SelectAccount
      selectedAccount={selectedAccount}
      userAccounts={userAccounts}
      handleAccount={handleAccount}
      handleSubmit={handleSubmit}
      navigation={navigation}
      transactionValue={route.params.value}
      loading={loading}
      mode={mode}
      agenteScanner={route.params.agentId}
      agenteMapa={route.params.agenteMap}
      agent={agent}

      // handleAgentDailyAmount={handleAgentDailyAmount}
    />
  );
};
