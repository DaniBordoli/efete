import { StyleSheet } from "react-native";
import { headerColor, buttonColor, buttonDark } from "../../Common/constans";

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
    color:'white'
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
    fontWeight: "bold",
  },
  contBotones : {
    marginTop:100,
  flexDirection: 'row-reverse',
  justifyContent:'space-evenly',


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
cancelarDark: {
  width: 160,
  height: 55,
  backgroundColor: buttonDark,
  marginTop: 10,
  alignSelf: "center",
  borderWidth: 1,
  borderColor: headerColor
},
tituloCancelarDark:{
  fontSize: 18,
  textAlign: "center",
  textTransform: "uppercase",
  color: headerColor,
  fontWeight: "bold",
},
});
