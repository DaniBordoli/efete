import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAgentTransactions } from "../../redux/store/actions/transactions";
import AgentHome from "./AgentHome";
import { View } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";
import moment from "moment";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");

  const agentTransactions = useSelector(
    (state) => state.transactions.agentTransactions
  );

  const userId = useSelector((state) => state.users.user._id);

  useEffect(() => {
    var date = moment();
    var fecha = date.locale("es").format("dddd MM-MMMM");

    setTime(fecha);
  });

  useEffect(() => {
    dispatch(fetchAgent(userId)).then((agent) => {
      dispatch(getAgentTransactions(agent.agent._id)).then(() =>
        setLoading(true)
      );
    });
  }, []);

  return (
    <AgentHome
      agentTransactions={agentTransactions}
      navigation={navigation}
      loading={loading}
      time={time}
    />
  );
};
