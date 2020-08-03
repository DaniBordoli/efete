import { StyleSheet, Dimensions } from "react-native";

export const style = StyleSheet.create({
  mainContainer : {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
   imageContainer:{
   width: '100%',
   alignItems: 'center'   
  },
   image : {
    width: '100%',
  },
  title: {
    color: "#6F76E4",
    fontSize: 22,
    fontFamily: "nunito",
    margin: '3%',
    textAlign: "center",
    textTransform: "uppercase",
  },
  icon : {
    width: 150,
    height: 150,
    marginTop: '4%',
    marginBottom: '6%'
  },
  text : {
    fontFamily: "nunito", 
    fontSize: 30,
    marginTop: '3%',
    textTransform: "uppercase" 
  },
  text1 : {
    fontSize: 20,
    marginTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    fontFamily: 'nunito',
    textAlign: 'center'
  },
  text2 : {
    fontSize: 50,
    marginTop: '3%',
    fontFamily: 'nunito',
    color: '#00CC96',

  },
  hr : {
    width: '80%',
    borderTopColor: '#808080',
    borderTopWidth: 1,
  },
  volver: {
    padding: '4%',
    borderRadius: 3,
    width:'37%',
    marginTop: "15%", 
    alignSelf:'center',
    borderWidth: 1,
    borderColor: "#00CC96",
    marginRight:'3%'
  },
  textCancelar : {
    color: "#00CC96",
    fontSize: 20,
    width:'100%',
    fontFamily: "nunito", 
    textAlign:'center'
    
 },
 confirmar : {
    backgroundColor: "#00CC96",
    padding: '4%',
    borderRadius: 3,
    width:'37%',
    marginTop: "15%", 
    alignSelf:'center',
    marginLeft:'3%',
 },
 textConfirmar : {
    color: "white",
    fontSize: 20,
    width:'100%',
    fontFamily: "nunito", 
    textAlign:'center'
 },
 botonesCont: {
   flexDirection: 'row',
   justifyContent:'space-evenly'
 }
})

