import { StyleSheet } from "react-native";
import {buttonColor} from '../../Common/constans'

export const style = StyleSheet.create({
    
    botonAgregar: {
      backgroundColor: buttonColor,
      width: 200,
      height: 48,
      alignSelf:'center',
      marginBottom:30
      
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
      marginTop: 40,
      marginBottom:15,
      fontFamily: "nunito",
      
    },
    hr: {
      borderBottomColor: "#DDDDDD",
      borderBottomWidth: 1,
      display: "flex",
      alignSelf: "center",
      width: 370,
    },
    parent: {
      flex:1,
      backgroundColor: "white",
      borderRadius: 12,
      alignSelf:'center',
      height:96,
      width:'90%',
      flexDirection: "row",
      alignItems: "center",
      shadowOpacity: 0.25,
      shadowRadius: 8.0,
      elevation: 5,
      marginTop:15,
      marginBottom:10

    },
    parentOnly: {
      
      backgroundColor: "white",
      borderRadius: 12,
      alignSelf:'center',
      height:96,
      width:'90%',
      flexDirection: "row",
      alignItems: "center",
      shadowOpacity: 0.25,
      shadowRadius: 8.0,
      elevation: 5,
      marginTop:15

    },

    negrita: {
      fontWeight:"bold"
    },

    wallet: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      marginRight:15,
      marginLeft:7
    },

  });

  