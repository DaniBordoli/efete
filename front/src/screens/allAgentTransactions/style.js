import { StyleSheet } from "react-native";
import { headerColor, buttonColor } from "../../Common/constans";

export const style = StyleSheet.create({
container: {
  height: '100%',
  width: '100%',
  backgroundColor:'#ffffff', 
  borderRadius: 10,
  flex: 1  
},
  movimientos: {
    marginTop: '6%',
    marginBottom: '6%',
    fontSize: 28,
    textAlign: "center",
    fontFamily: "nunito",
    color: `${headerColor}`,
  },
  cardsCont:{
    borderRadius: 10,
    marginTop: '2%'
  },
  contCards:{
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1%'
  },
  cards: {
    flexDirection: 'row-reverse',
    justifyContent: "space-evenly",
    alignItems: 'center',
    paddingBottom: '5%',
    paddingTop: '4%',
    // borderColor: 'green',
    // borderWidth: 1
  },
  amount:{
   fontSize: 35,
   color: '#22D249',
  //  borderColor: 'pink',
  //  borderWidth: 1
  },
  bankCont:{
  width: '100%',
  },
  bank:{
   fontFamily: 'nunito',
   fontSize: 18,
   textAlign: 'center'
  },
  infoCont:{
    width: '55%',
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 1
  },
  accNumber:{
   alignSelf: 'center',
   color: '#94AFB6',
   marginTop: '3%'
  },
  verBtn:{
    borderRadius: 5,
    fontSize: 40, 
    width: '70%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#625EF6',
    marginBottom: '5%',
    alignItems: 'center',
    alignSelf: 'center'
  },
  titleBtn:{
    color: '#5352EC',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    marginTop: '2%'
  },
  hr: {
    borderWidth: 0.5,
    borderColor: '#DDDDDD',
    width: '100%' 
   }
});
