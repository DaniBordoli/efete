import { StyleSheet } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  monto: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "nunito",
    marginTop: 30,
    color: `${headerColor}`,
  },
  valor: {
    marginBottom: 50,
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    marginTop: 10,
    borderColor:"#807fc7"
  },
  otroMonto: {
    backgroundColor: "white",
    height: 66,
  },
  montoContainer: {
    borderRadius: 5,
    marginBottom: 50,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8.0,
    elevation: 3,
  },
  otroMontoTitulo: {
    color: `${buttonColor}`,
    fontSize: 15,
    textAlign: "center",
  },
  hr: {
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    display: "flex",
    alignSelf: "center",
    width: "100%",
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
    fontWeight: "400",
  },
  confirmarDisabled : {
    width: 160,
    height: 55,
    marginTop: 10,
    alignSelf: "center",

},
  tituloConfirmarDisabled : {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
 },
 contBotones : {
   flexDirection: 'row-reverse',
   justifyContent: "space-evenly",


 },
 cancelar: {
  width: 160,
  height: 55,
  backgroundColor: 'white',
  marginTop: 10,
  alignSelf: "center",
  borderWidth: 1,
  borderColor: buttonColor
},
tituloCancelar:{
  fontSize: 18,
  textAlign: "center",
  textTransform: "uppercase",
  color: buttonColor,
  fontWeight: "bold",
},
});
