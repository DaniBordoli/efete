import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor, verdeTexto, grisClaro } from "../../Common/constans";

export const style = StyleSheet.create({
  mainContainer: {
    height:'100%',
    justifyContent:'center',
  },
  container: {
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
  cajas: {
    marginBottom: '8%',
    alignItems: "center",
  },
  mainTitle : {
    color: "#6F76E4",  
    fontFamily: "nunito-bold",  
    fontSize: 20,    
    textTransform: "uppercase",
    marginBottom: '10%',
    marginTop: '5%'
  },
  title: {
    color: "#6F76E4",  
    fontFamily: "nunito",  
    fontSize: 20,    
    textTransform: "uppercase",
    marginBottom: '3%'
  },
  descriptionOrg: {
    fontFamily: 'nunito',
    textAlign: 'center',
    backgroundColor: "#FFFFFF",
    padding: '2%',
    fontSize: 18,
    width: '80%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: "#B8B7FF",
    elevation: 1,
    shadowRadius: 2.0,
    shadowOpacity: 0.25,
    borderRadius:8
  },
  description: {
    backgroundColor: "#FFFFFF",
    padding: '2%',
    fontSize: 18,
    width: '90%',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: "#B8B7FF",
    elevation: 1,
    shadowRadius: 2.0,
    shadowOpacity: 0.25,
    borderRadius:8
  },
  titulo1:{
  fontFamily: "nunito", 
  textAlign: 'center',
  fontSize: 18,
  margin: '2%', 

  },
  titulo2:{
    margin: '2%',
    fontFamily: "regular",
    fontSize: 15
  },
  confirmar: {
    backgroundColor: 'white',
    padding: "2%",
    borderRadius: 5,
    width: "100%",
    marginTop: "12%",
    marginBottom: '5%',
    alignSelf: "center",
    borderWidth: 1,
    borderColor: '#B8B7FF',
  },
  textConfirmar: {
    color: "#6F76E4",
    fontSize: 20,
    width: "100%",
    fontFamily: "nunito",
    textAlign: "center",
    paddingLeft: '10%' ,
    paddingRight: '10%'
  },
});
