import React, { useState, useEffect } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { Text } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";

import { StyleSheet, View, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainAccount } from "../../redux/store/actions/accounts";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgent(userId));
    dispatch(fetchMainAccount(userId));
    /*     setLoading(true)
     */
  }, []);

  const userId = useSelector((state) => state.users.user._id);
  const agentId = useSelector((state) => state.agents.agent._id);
  const mainAccount = useSelector((state) => state.accounts.account._id);

  /* const [user, userSet] = useState('')
  const [loading, setLoading] = useState(false); */

  console.log("USEER:", userId);
  console.log("AGENTEEEEEE:", agentId);
  return (
    <View style={styles.container}>
      <QRCode
        content={`${agentId},${mainAccount}`}
        /* `${{
            fecha: "132",
            dato: "13132"
          }}` */
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
