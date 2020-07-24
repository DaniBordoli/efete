import { StyleSheet } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  monto: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "nunito",
    marginTop: 36,
    color: `${headerColor}`,
    marginBottom: 150,
  },
  input: {
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    borderColor: "#807fc7",
  },
  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${buttonColor}`,
    marginTop: 100,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
});
