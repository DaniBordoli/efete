import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    titulo: {
      fontSize: 64,
      color: "#6F76E4",
      textAlign: "center",
      fontFamily: "nunito",
      marginTop: 50,
    },
    iniciarSesion: {
      fontSize: 24,
      color: "#6F76E4",
      textAlign: "center",
      fontFamily: "nunito",
      marginTop: 50,
    },
    inputContainer: {
      backgroundColor: "#FFFFFF",
      marginLeft: 15,
      marginRight: 15,
      borderRadius: 20,
      height: 130,
      marginTop: 30,
     /*  shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 18, */
      elevation:7
    },
    botonRegister: {
      backgroundColor: "#00CC96",
      width: 167,
      height: 48,
    },
    tituloRegister: {
      color: "#404CB3",
      textTransform: "uppercase",
      fontFamily: "nunito",
    },
    hr: {
      borderBottomColor: "#DDDDDD",
      borderBottomWidth: 1,
      display: "flex",
      alignSelf: "center",
      width: '100%',
    },
    botonAgregar: {
      backgroundColor: "#00CC96",
      width: 167,
      height: 48,
      flexDirection: "row-reverse",
      justifyContent: "center",
      alignItems:"center",
      marginTop: 40,
      
      //marginLeft:50,
    },
    tituloAgregar: {
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontFamily: "nunito",
      fontWeight:'normal'
    },
    // botonDeterminada: {
    //   backgroundColor: "#5352EC",
    //   width: 250,
    //   height: 48,
    //   flexDirection: "row-reverse",
    //   justifyContent: "center",
    //   marginTop: 75,
    //   marginLeft:"auto",
    //   marginRight:"auto"
    //   //marginLeft:50,
    // },
    // tituloDeterminada: {
    //   color: "#FFFFFF",
    //   textTransform: "uppercase",
    //   fontFamily: "nunito",
    //   fontWeight:'normal',
    //   fontSize:15
    // },
    asociadas: {
      fontSize: 24,
      color: "#6F76E4",
      textAlign: "center",
      marginTop: 50,
      fontFamily: "nunito",
    },
    // searchSection: {
    //   flex: 1,
    //   flexDirection: "row",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   backgroundColor: "#fff",
    //   borderRadius: 10,
    // },
    // searchIcon: {
    //   padding: 10,
    // },
    input: {
      fontSize: 18,
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: "#fff",
      color: "#424242",
    },
    container: {
      flex: 1,
      backgroundColor:"#FFFFFF",
      borderRadius: 12,
      margin:10
      

    
    },
    
    wallet: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      size:50,
      color:"grey",
      flex:3,
      
      
    },
    
    principal: {
      flexDirection: "column",
      justifyContent: "flex-start",
      size:50,
      flex:8,
      marginLeft:30

    },

    delete: {
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "flex-end",
      size:50,
      color:"grey",
      flex:3,
      marginRight:15,
      
      
    },
    
    

  });