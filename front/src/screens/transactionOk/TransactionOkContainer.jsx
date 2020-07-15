import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAgent } from "../../redux/store/actions/agents";
import TransactionOk from "./TransactionOk";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchAgent(route.params.agentId)).then(() => {
  //     setLoading(true);
  //   });
  // }, []);

  const user = useSelector((state) => state.users.user);
  const transaction = useSelector((state) => state.transactions.transaction);

  // const [loading, setLoading] = useState(false);

  return (
    <View>
      <TransactionOk
        navigation={navigation}
        transaction={transaction}
        // loading={loading}
      />
    </View>
  );
};
