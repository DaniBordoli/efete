import { StyleSheet } from "react-native";
import { headerColor, verdeTexto } from "../../Common/constans";

export const style = StyleSheet.create({
  text: {
    textAlign: "left",
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    //fontFamily: "sans-serif",
    marginTop: 25,
  },

  icon: {
    backgroundColor: "#ccc",
    position: "absolute",
    right: 0,
    bottom: -30,
  },

  movimientos: {
    fontSize: 28,
    marginTop: 40,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },

  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius:8,
    marginTop:5,
    elevation:2,
  },

  input: {
    
    borderRadius:8,
    fontSize: 18,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    color: verdeTexto,
  },

  boton: {
    backgroundColor: "#00CC96",
    borderRadius: 5,
    marginTop: 50 ,
    width:236,
    height:43,
    alignSelf:'center',
    justifyContent:'center',
  },
});
