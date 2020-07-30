import { StyleSheet } from "react-native";
import { headerColor, verdeTexto } from "../../Common/constans";

export const style = StyleSheet.create({
  container: {
  flex: 1, 
  backgroundColor: "#F1F3F6",
  margin: '7%' 
  },

  text: {
    textAlign: "left",
    color: "black",
    fontSize: 14,
    textTransform: "uppercase",
    fontFamily: "sans",
    fontWeight: "bold",
    marginTop: '6%',
    marginBottom: '2%',
    marginLeft: '1%'
  },

  icon: {
    backgroundColor: "#ccc",
    position: "absolute",
    right: 0,
    bottom: -30,
  },

  movimientos: {
    fontSize: 30,
    marginTop: '5%',
    marginBottom: '7%',
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
    padding: '4%',
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
