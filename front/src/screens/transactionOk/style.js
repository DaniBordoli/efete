import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "nunito",
    marginTop: 30,
    color: `${headerColor}`,
    fontWeight: "bold",
  },

  okIcon: {
    marginTop: 100,
    alignItems: "center",
  },
  clearIcon: {
    marginTop: 20,
    marginRight: 15,
    alignItems: "flex-end",
  },
  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${buttonColor}`,
    marginTop: 10,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "400",
  },

  transactionContainer: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 50,
  },
  buttonContainer: {},

  subTitle: {
    fontSize: 20,
    color: "#6F76E4",
    textAlign: "center",
    fontFamily: "nunito",
    marginTop: 30,
  },
  content: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "nunito",
  },
});
