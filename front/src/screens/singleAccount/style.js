import { StyleSheet, Dimensions } from "react-native";
import { headerColor, verdeTexto, deleteColor } from "../../Common/constans";

export const style = StyleSheet.create({
  titulo: {
    textAlign: "center",
    fontSize: 26,
    fontFamily: "delgado",
    marginTop: 30,
    marginBottom: 15,
    color: `${headerColor}`,
    fontWeight:'bold'
    
  },
  texto: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-bold",
    color:verdeTexto ,
    
  },
  textoContainer:{
    justifyContent: "center",
    backgroundColor: "white",
    height: 60,
    width:"87%",
    borderRadius:5,
    borderColor:'#e6e3e3',
    borderWidth:1
  },

  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${deleteColor}`,
    
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
    fontSize: 16,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#4F9FFF",
    fontWeight: "500",
    alignSelf: "center",
  },

  accountContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    width: Dimensions.get("window").width - 50,
    backgroundColor: "#F7F5FE",
    elevation: 7,
    alignSelf: "center",
    paddingBottom: 30,
    borderRadius: 20,
  },
});
