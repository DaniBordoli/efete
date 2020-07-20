import { StyleSheet } from "react-native";
import {headerColor , buttonColor} from '../../Common/constans'


export const style = StyleSheet.create({
  button: {
    fontSize: 50,
    marginVertical: 20,
  },
  monto:{
    textAlign:'center',
    fontSize:36,
    fontFamily:'nunito',
    marginTop:36,
    marginBottom:60,
    color:`${headerColor}`
  },
  montoContainer:{
    backgroundColor:'white'
  },
  otroMontoTitulo:{
    color:`${buttonColor}`,
    fontSize:15,
    textAlign:'center'
  }
});
