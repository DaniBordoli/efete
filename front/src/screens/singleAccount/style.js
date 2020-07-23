import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "nunito",
    marginTop: 30,
    marginBottom: 15,
    color: `${headerColor}`,
    fontWeight: "bold",
  },
  texto: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "nunito",
    fontWeight: "bold",
  },

  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${buttonColor}`,
    marginTop: 50,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "400",
  },
  mainAccount: {
    width: 250,
    fontSize: 15,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#4F9FFF",
    fontWeight: "400",
    alignSelf: "center",
  },

  accountContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#F7F5FE",
    elevation: 7,
    alignSelf: "center",
    paddingBottom: 30,
    borderRadius: 20,
  },
});
