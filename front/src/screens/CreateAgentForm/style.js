import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({

    container : {
        alignItems: "center"
    },
    containerTitle : {
        color: "#6F76E4",
        fontSize: 22,    
        fontFamily: "nunito", 
        margin: 40,
        textTransform: "uppercase"
    },
    title : {
    marginBottom: 10,
    color: '#808060'


    },
    input : {
    backgroundColor: "#ffffff",
    width: 350,
    padding: 5,
    marginBottom: 25,
    elevation: 2,
    shadowRadius: 4.0,
    shadowOpacity: 0.25,
    },
    confirmar : {
        backgroundColor: "#00CC96",
        padding: 5,
        borderRadius: 5,
        marginTop: 30  
    },
    textConfirmar : {
        color: "#ffffff",
        fontSize: 18,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 5,
        paddingTop: 5,
        fontFamily: "nunito" 
    },
    openCamera : {
        alignItems: "center"
    },
    textOpenCamera : {
        margin: 15,
        color: '#A4A4A4',
        fontSize: 15
    },
    textMaxsize : {
        margin: 5,
        color: '#606060',
        fontSize: 10
        
    }

})