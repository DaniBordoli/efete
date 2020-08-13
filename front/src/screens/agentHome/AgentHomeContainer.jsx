import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAgentTransactions } from "../../redux/store/actions/transactions";
import AgentHome from "./AgentHome";
import { fetchAgent } from "../../redux/store/actions/agents";
import moment from "moment/min/moment-with-locales";
import esLocale from "moment/locale/es";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");
  const access = route.params.access ? route.params.access : false;

  const agentTransactions = useSelector(
    (state) => state.transactions.agentTransactions
  );
  const agent = useSelector((state) => state.agents.agent);

  const userId = useSelector((state) => state.users.user._id);

  useEffect(() => {
    var date = moment();
    var fecha = date.locale("es", esLocale).format("dddd MM-MMMM");

    setTime(fecha);
  });

  useEffect(() => {
    dispatch(fetchAgent(route.params.agent._id)).then((agent) => {
      dispatch(getAgentTransactions(agent.agent._id)).then(() =>
        setLoading(true)
      );
    });
  }, []);

  return (
    <AgentHome
      mode={mode}
      agentTransactions={agentTransactions}
      navigation={navigation}
      loading={loading}
      time={time}
      agent={agent}
      access={access}
    />
  );
};
