import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor, buttonDark, fondoColor, violetaOscuro } from "../../Common/constans";

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
  inputDark: {
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    borderColor: "white",
    color: "white",
  },

  confirmar: {
    width: 160,
    height: 55,
    backgroundColor: `${buttonColor}`,
    marginTop: 10,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
  contBotones: {
    marginTop: 100,
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  cancelar: {
    width: 160,
    height: 55,
    backgroundColor: fondoColor,
    marginTop: 10,
    alignSelf: "center",
    
  },
  tituloCancelar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: violetaOscuro,
    fontWeight: "bold",
  },
  cancelarDark: {
    width: 160,
    height: 55,
    backgroundColor: 'black',
    marginTop: 10,
    alignSelf: "center",
    
  },
  tituloCancelarDark: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: headerColor,
    fontWeight: "bold",
  },
  alert: {
    textAlign: "center",
    backgroundColor: "#ff9966",
    width: Dimensions.get("window").width / 1.3,
    paddingTop: "2%",
    paddingBottom: "2%",
    color: "white",
    borderRadius: 20,
    fontWeight: "bold",
    marginTop: "2%",
    alignSelf: "center",
  },
});
