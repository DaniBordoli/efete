import { StyleSheet, Dimensions } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({    
imageCont : {
width: "100%"   
},
image : {
 width: "100%"
},

container : {
alignItems: "center",
backgroundColor: '#FAFBFF',
},
title : {
    fontFamily: "nunito", 
    color: "#6F76E4",
    fontSize: 30,
    margin: 15,
    textAlign: 'center',
    textTransform: "uppercase"
},
icon : {
  width: 150,
  height: 150,
  marginTop: 20,
  marginBottom: 20
},
text : {
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 15,
  width: '80%'
},
valor : {
   fontSize: 50,
   fontFamily: 'nunito' 
},
volver : {
    backgroundColor: "#00CC96",
    padding: 5,
    borderRadius: 5,
    marginTop: 50, 
    marginBottom: 50 
},
textConfirmar : {
    color: "#ffffff",
    fontSize: 18,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: "nunito" 
}
})