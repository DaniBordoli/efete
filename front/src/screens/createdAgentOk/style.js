import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
    mainContainer : {
     alignItems: "center",
     backgroundColor: '#FAFBFF'
    },
    container : {
      alignItems: "center"
    },
    title : {
    fontFamily: "nunito", 
    color: "#6F76E4",
    fontSize: 60,
    margin: 10  
    },
    subTitle : {
     fontSize: 20,
     margin: 20,
     width: 300,
     textAlign: "center",
     color: "#424242"
    },
    ok : {
       width: 90,
       height: 90 
    },
    datos:{
      alignItems: "center", 
      backgroundColor: "#FFFFFF",
      borderRadius: 15,
      width: 375,
      padding: 30,
      elevation: 2,
      shadowRadius: 4.0,
      shadowOpacity: 0.50,
      marginBottom: 10

    },
    datosTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#5A5A5A'
    },
    image : {
        backgroundColor: 'black',
        width: 150,
        height: 150,
        margin: 20,
        borderRadius: 20
    },
    caja : {
      borderBottomWidth: 1,
      borderBottomColor: '#C7C7C7',  
      flexDirection: "row",
      width: 350,
      justifyContent: "space-around"
    },
    info : {
        margin: 15,
        fontWeight: "bold",
        fontSize: 16
    },
    description : {
        margin: 15,
        color: "#424242",
        fontSize: 16
    }


})