import React, { useState, useEffect } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { Text } from "react-native";
import { headerColor, fondoColor, rojo } from "../../Common/constans";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainAccount } from "../../redux/store/actions/accounts";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const mode = useSelector((state) => state.users.mode);
  useEffect(() => {
    //dispatch(fetchAgent());
    dispatch(fetchMainAccount(userId)).then(() => {
      setLoading(true);
    });
  }, []);

  const userId = useSelector((state) => state.users.user._id);
  const agentId = useSelector((state) => state.agents.agent._id);
  const mainAccount = useSelector((state) => state.accounts.mainAccount);

  return loading ? (
    <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
      {mainAccount._id ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.texto}>
            Con este código vas a poder dar extracciones.
          </Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}></View>
      )}
      {mainAccount._id ? (
        <View style={styles.container}>
          <View>
            <QRCode
              content={`${agentId},${mainAccount._id},${mainAccount.accountNumber}`}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <AntDesign name="warning" size={60} color={rojo} />
          <Text style={styles.description}>
            Tienes que tener una cuenta creada o elegir una cuenta
            predeterminada para continuar
          </Text>
          <TouchableOpacity
            style={styles.boton}
            onPress={() => navigation.navigate("AddAccounts")}
          >
            <Text style={styles.botonTxt}>CREAR CUENTA</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={{ flex: 1 }}></View>
    </View>
  ) : (
    <Load />
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
    fontFamily: "nunito-bold",
    color: headerColor,
    textAlign: "center",
  },
  texto2: {
    fontSize: 21,
    color: "#4F9FFF",
    marginTop: 20,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 20,
    margin: "5%",
    fontFamily: "regular",
  },
  boton: {
    borderColor: "#6F76E4",
    borderWidth: 1,
    marginTop: "5%",
    borderRadius: 4,
  },
  botonTxt: {
    fontFamily: "nunito",
    fontSize: 20,
    color: "#6F76E4",

    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
});
