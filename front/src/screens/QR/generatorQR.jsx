import React, { useState, useEffect, useRef } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { Text } from "react-native";
import { headerColor, fondoColor, rojo } from "../../Common/constans";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainAccount } from "../../redux/store/actions/accounts";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";
import * as MediaLibrary from "expo-media-library";
import ViewShot from "react-native-view-shot";
import { Button } from "react-native-elements";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const mode = useSelector((state) => state.users.mode);
  useEffect(() => {
    route.params.access
      ? dispatch(fetchMainAccount(route.params.agent.user[0])).then(() => {
          setLoading(true);
        })
      : dispatch(fetchMainAccount(userId)).then(() => {
          setLoading(true);
        });
  }, []);

  const userId = useSelector((state) => state.users.user._id);
  const agentId = route.params.agent._id;
  const mainAccount = useSelector((state) => state.accounts.mainAccount);
  const viewShot = useRef();
  const [showPopUp, setShowPopUp] = useState(false);

  const takeScreenshot = () => {
    viewShot.current
      .capture()
      .then((data) => MediaLibrary.saveToLibraryAsync(data))
      .then(() => {
        setShowPopUp(true);
        setTimeout(() => {
          setShowPopUp(false);
        }, 2000);
      });
  };

  return loading ? (
    <ViewShot ref={viewShot} options={{ format: "jpg", quality: 0.9 }}>
      <View
        style={{
          backgroundColor: mode ? fondoColor : "black",
          marginTop: "15%",
        }}
      >
        {mainAccount._id ? (
          <View style={{ justifyContent: "center" }}>
            <Text style={styles.texto}>
              Con este código vas a poder dar extracciones.
            </Text>
          </View>
        ) : (
          <View></View>
        )}
        {mainAccount._id ? (
          <View style={styles.container}>
            <View>
              <QRCode
                content={`${agentId},${mainAccount._id},${mainAccount.accountNumber}`}
              />
              {showPopUp ? (
                <View style={styles.popUp}>
                  <Text style={styles.popUpText}>
                    ¡Se ha guardado el código en tu galería!
                  </Text>
                </View>
              ) : null}
              <View>
                <Button
                  buttonStyle={styles.confirmar}
                  titleStyle={styles.tituloConfirmar}
                  title="Guardar Código"
                  onPress={() => {
                    takeScreenshot();
                  }}
                />
              </View>
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
        <View></View>
      </View>
    </ViewShot>
  ) : (
    <Load />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 20,
    paddingTop: "5%",
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
  confirmar: {
    backgroundColor: "#00CC96",
    padding: "4%",
    borderRadius: 3,
    width: "100%",
    marginTop: "10%",
    alignSelf: "center",
    marginBottom: "2%",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
  },
  popUp: {
    marginTop: "1%",
    alignSelf: "center",
    backgroundColor: "#6F76E4",
    borderRadius: 20,
    padding: "3%",
  },
  popUpText: {
    color: "white",
  },
});
