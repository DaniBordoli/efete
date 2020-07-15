import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAgentTransactions } from "../../redux/store/actions/transactions";
import AgentHome from "./AgentHome";
import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const agentTransactions = useSelector(
    (state) => state.transactions.agentTransactions
  );

  const agentId = useSelector((state) => state.user.user._id);

  useEffect(() => {
    dispatch(getAgentTransactions(agentId)); // Hardcodeado => Despues pasar Id.
  }, []);

  return (
    <View>
      <UserAgent
        agentTransactions={agentTransactions}
        navigation={navigation}
      />
    </View>
  );
};
