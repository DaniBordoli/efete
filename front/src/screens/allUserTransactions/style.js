import { StyleSheet } from "react-native";
import { headerColor } from "../../Common/constans";

export const style = StyleSheet.create({
container: {
    margin: '5%',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: '2%',
    flex: 1  
},
    movimientos: {
    fontSize: 28,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
  cardsCont:{
    borderWidth: 2,
    borderColor: 'pink',
    borderRadius: 10,
    marginTop: '2%'
  },
  card: {
      borderWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      marginTop: '2%'
  },
  description:{
   flexDirection: 'row'    
  }

});
