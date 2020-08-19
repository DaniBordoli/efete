import { StyleSheet, Dimensions } from "react-native";
import {
  inputDark,
  headerColor,
  buttonDark,
  textButtonDark,
} from "../../Common/constans";

export const style = StyleSheet.create({
  agente: {
    width: Dimensions.get("window").width / 2.4,
    height: Dimensions.get("window").height / 5.5,
    backgroundColor: "white",
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 5,
  },
  agenteDark: {
    width: Dimensions.get("window").width / 2.5,
    height: Dimensions.get("window").height / 5.5,
    backgroundColor: buttonDark,
    margin: 13,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  text: {
    textAlign: "center",
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    marginTop: "5%",
  },
  textDark: {
    textAlign: "center",
    color: textButtonDark,
    fontSize: 14,
    textTransform: "uppercase",
    marginTop: "5%",
  },
  imageIconStyle: {
    padding: 5,
    resizeMode: "stretch",
  },
});
