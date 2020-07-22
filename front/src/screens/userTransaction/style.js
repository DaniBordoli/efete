import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
    
    
    mainContainer : {
       alignItems: "center",
    },
    container : {
      marginTop:20,
      marginLeft:10,
      marginRight: 10,
      marginBottom: 20,
      padding: 20,
      alignItems: "center",
      backgroundColor: '#F7F5FE',
      borderRadius: 25,
      elevation: 3,
      shadowRadius: 4.0,
      shadowOpacity: 0.25,
    },
    cajas : {
       borderRadius: 12,
       padding: 10,
       margin: 10,
       alignItems: "center",
    },
    title : {
      color: "#6F76E4",  
      fontFamily: "nunito",  
      fontSize: 22,    
      textTransform: "uppercase",
      borderRadius: 5,
      marginBottom: 10
    },
    description : {
      fontFamily: "nunito",  
      backgroundColor: "#FFFFFF",
      color: '#505050',
      padding: 15,
      fontSize: 18,
      width: 300,
      textAlign: "center",
      elevation: 2,
      shadowRadius: 4.0,
      shadowOpacity: 0.25,

    },
    confirmar: {
        width: 167,
        height: 60,
        backgroundColor: `${buttonColor}`,
        marginTop: 10   
    },
    tituloConfirmar: {
        fontSize: 18,
        textAlign: "center",
        textTransform: "uppercase",
        color: "white",
        fontWeight: "400",
    }
})