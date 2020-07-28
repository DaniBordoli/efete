import { StyleSheet } from "react-native";
import { headerColor } from "../../Common/constans";

export const style = StyleSheet.create({
 mainContainer : {
  backgroundColor: "#FAFBFF",
  height: '100%'
 },
  container : {
    alignItems: "center",
    backgroundColor: "#FAFBFF",
    height: '100%'
  },
  containerTitle : {
    color: "#6F76E4",
    fontSize: 22,    
    fontFamily: "nunito", 
    marginTop: "12%",
    marginBottom: "15%",
    textTransform: "uppercase"
  },
  title : {
    marginBottom: '3%',
    color: '#424242',
    fontSize: 15
  },
  input : {
    backgroundColor: "#ffffff",
    width: 300,
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
    alignItems: "center",
    marginTop: 20,
  },
textOpenCamera : {
    margin: 15,
    color: '#A4A4A4',
    fontSize: 15,
  },
textMaxsize : {
    margin: 5,
    color: '#606060',
    fontSize: 10, 
  },
});
