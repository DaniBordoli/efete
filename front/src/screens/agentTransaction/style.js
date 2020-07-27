import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor, verdeTexto, grisClaro } from "../../Common/constans";

export const style = StyleSheet.create({
  mainContainer: {
    flex:1,
    
  },
  container: {
    marginTop:20,
    marginLeft:20,
    marginRight: 20,
    marginBottom: 20,
    padding: 20,
    alignItems: "center",
    backgroundColor: '#F7F5FE',
    borderRadius: 25,
    elevation: 4,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
  },
  cajas: {
    borderRadius: 12,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  title: {
    color: "#6F76E4",
    fontFamily: "nunito",
    fontSize: 22,
    textTransform: "uppercase",
    borderRadius: 5,
    marginBottom: 10,
  },
  description: {
    fontFamily: "sans-bold",  
      backgroundColor: "#FFFFFF",
      color: verdeTexto,
      padding: 15,
      fontSize: 18,
      width: 300,
      textAlign: "center",
      borderWidth:1,
      borderColor:grisClaro,
      shadowRadius: 4.0,
      shadowOpacity: 0.25,
      borderRadius:3
  },
  confirmar: {
    width: 167,
    height: 60,
    backgroundColor: `${buttonColor}`,
    marginTop: 10,
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "400",
  },
});
