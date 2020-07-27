import { StyleSheet } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
  botonConfirmar: {
    backgroundColor: "#00CC96",
    width: 167,
    height: 48,
  },
  tituloConfirmar: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontFamily: "nunito",
    fontWeight: "normal",
  },
  input: {
    fontSize: 14,
    marginLeft: 15,
    marginRight: 15,
    borderRadius:4,
    height: 50,
    backgroundColor: "white",
    color: "#424242",
    borderWidth:0.5,
    borderColor:'#c8c8c8',
    justifyContent:'center'

  },
  text: {
    textAlign: "center",
    fontSize: 15,
    margin: 20,
    color: "#6F76E4",
    fontWeight: "bold",
    marginTop:30,
  },
  dropdown: {
    marginTop:50,
    marginLeft: 15,
    marginRight: 15,
    height: 50,
  },
  placeholder: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  
  textoo: {
    textAlign: "center",
    marginTop:20,
    fontSize: 30,
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
});
