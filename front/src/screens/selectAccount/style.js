import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor, verdeTexto } from "../../Common/constans";

export const style = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "nunito",
    marginTop: 40,
    color: `${headerColor}`,
    fontWeight: "bold",
  },
  monto: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    color: verdeTexto,
    width: "90%",
    fontSize: 28,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
    elevation: 3,
    alignSelf: "center",
  },
  account: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  bankIcon: {
    marginLeft: 12,
    marginRight: 10,
  },
  accountContainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 12,
    width: "90%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "center",
    height: 80,
  },
  contenedor:{
    elevation: 3,
    marginBottom:20,
    marginTop:10
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    marginTop:15,
    width:160,
    backgroundColor: headerColor,
    borderRadius: 5,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:18
  },
  modalText: {
  
    textAlign: "center",
    fontSize:20
  },
  negrita:{
    fontSize:22,
    fontFamily:'nunito-bold', 
    marginBottom: 15,
    textAlign:'center'
  }
});
