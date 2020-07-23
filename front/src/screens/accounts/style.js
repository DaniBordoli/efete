import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    
    botonAgregar: {
      backgroundColor: "#00CC96",
      width: 200,
      height: 48,
      marginTop: 40,
      marginLeft:110,
    },
    tituloAgregar: {
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontFamily: "nunito",
      fontWeight:'normal'
    },
    
    asociadas: {
      fontSize: 24,
      color: "#6F76E4",
      textAlign: "center",
      marginTop: 50,
      fontFamily: "nunito",
    },
    
    parent: {

      backgroundColor: "white",
      borderRadius: 15,
      margin: 10,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      //flex:6,
      shadowOpacity: 0.25,
      shadowRadius: 8.0,
      elevation: 5,

    },

    negrita: {
      fontWeight:"bold"
    },

    wallet: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flex:2

    },

  });