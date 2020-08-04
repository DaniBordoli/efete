import { StyleSheet } from "react-native";
import { headerColor } from "../../Common/constans";

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
  card: {
    flexDirection: 'row-reverse',
    justifyContent: "space-around",
    alignItems: 'center',
    paddingBottom: '5%',
    paddingTop: '3%'
  },
  description:{
   flexDirection: 'row'    
  },
  titleBtn:{
  color: '#5352EC',
  marginLeft: '2%',
  marginRight: '2%',
  marginBottom: '2%',
  marginTop: '2%'
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
  amount:{
  fontSize: 35,
  color: '#22D249'
  },
  inCont:{
  alignItems: 'center'
  },
  contCards:{
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '1%'
  },
  agent:{
  fontSize: 20,
  marginBottom: '3%'
  },
  address:{
   color: '#94AFB6',
   marginBottom: '3%'
  },
  realizada: {
   color: '#5BC680',
   fontSize: 13
  },
  hr: {
   borderWidth: 0.5,
   borderColor: '#DDDDDD',
   width: '100%' 
  }

});
