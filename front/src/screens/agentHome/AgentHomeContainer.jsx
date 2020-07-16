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
    dispatch(getAgentTransactions("5f06437f5739037841c7195d")).then(() =>
      setLoading(true)
    ); // Hardcodeado => Despues pasar Id por navigation del boton anterior a esta pantalla
    dispatch(fetchAgent(userId)).then((agent) => {
      dispatch(getAgentTransactions(agent.agent._id)).then(() =>
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
