import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAgentTransactions } from "../../redux/store/actions/transactions";
import AgentHome from "./AgentHome";
import { View } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const agentTransactions = useSelector(
    (state) => state.transactions.agentTransactions
  );

  const userId = useSelector((state) => state.users.user._id);
  useEffect(() => {
    dispatch(fetchAgent(userId)).then((agent) => {
      console.log(agent)
      dispatch(getAgentTransactions("5f11c28efe514f5ae4cbd243")).then(() =>
        setLoading(true)
      );
    });
  }, []);

  return (
    <View>
      <AgentHome
        agentTransactions={agentTransactions}
        navigation={navigation}
        loading={loading}
      />
    </View>
  );
};
