import React, { useState, useEffect } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { Text } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";
import { headerColor } from "../../Common/constans";
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

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.texto}>Escanea el codigo y retira tu dinero</Text>
      </View>
      <View style={styles.container}>
        <QRCode
          content={`${agentId},${mainAccount}`}
          /* `${{
            fecha: "132",
            dato: "13132"
          }}` */
        />
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  texto: {
    marginLeft: 36,
    marginRight: 36,
    fontSize: 28,
    marginTop: 15,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: headerColor,
    textAlign: "center",
  },
  texto2: {
    fontSize: 21,
    color: "#4F9FFF",
    marginTop: 20,
    textAlign: "center",
  },
});
