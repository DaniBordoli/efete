import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor , grisClaro, verdeTexto} from "../../Common/constans";

export const style = StyleSheet.create({
    
    
    mainContainer : {
      height:'100%',
       justifyContent:'center',
    },
    container : {
      marginTop:'4%',
      marginLeft:'4%',
      marginRight: '4%',
      marginBottom: '4%',
      paddingTop: '3%',
      alignItems: "center",
      backgroundColor: '#FBFBFB',
      borderRadius: 12,
      elevation: 2,
      shadowRadius: 2.0,
      shadowOpacity: 0.25,
      borderWidth: 1,
      borderColor: "#B8B7FF"
    },
    cajas : {
       padding: '3%',
       margin: '3%',
       alignItems: "center",
    },
    mainTitle : {
      color: "#6F76E4",  
      fontFamily: "nunito-bold",  
      fontSize: 20,    
      textTransform: "uppercase",
      marginBottom: '5%'
    },
    title : {
      color: "#6F76E4",  
      fontFamily: "nunito",  
      fontSize: 20,    
      textTransform: "uppercase",
      marginBottom: '3%'
    },
    description: {
       fontFamily: "nunito",  
        backgroundColor: "#FFFFFF",
        color: verdeTexto,
        padding: '2%',
        fontSize: 18,
        width: '80%',
        textAlign: "center",
        borderWidth: 0.5,
        borderColor: "#B8B7FF",
        elevation: 1,
        shadowRadius: 2.0,
        shadowOpacity: 0.25,
        borderRadius:8
    },
    confirmar: {
      backgroundColor: 'white',
      padding: "2%",
      borderRadius: 5,
      width: "60%",
      marginTop: "12%",
      marginBottom: '5%',
      alignSelf: "center",
      borderWidth: 1,
      borderColor: '#B8B7FF'
    },
    textConfirmar: {
      color: "#6F76E4",
      fontSize: 20,
      width: "100%",
      fontFamily: "nunito",
      textAlign: "center",
    },
})