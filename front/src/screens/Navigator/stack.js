import React from "react";
import { Feather } from '@expo/vector-icons'; 
import {Button} from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/home";
import userHomeContainer from "../userHome/userHomeContainer";
import EditUserProfileContainer from "../EditUserProfile/EditUserProfileContainer";
import AddAccountsContainer from "../accounts/AddAccountsContainer";
import SelectAmountContainer from "../selectAmount/SelectAmountContainer";
import SelectOtherAmountContainer from "../selectOtherAmount/SelectOtherAmountContainer";
import EditAgentContainer from "../EditAgent/EditAgentContainer";
import SingleUserTransactionContainer from "../userTransaction/SingleUserTransactionContainer";
import verifityEmail from "../verifityEmail/verifityEmail";
import successRegister from "../verifityEmail/successRegister";
import registerContainer from "../register/registerContainer";
import LoginContainer from "../login/LoginContainer";

const Stack = createStackNavigator();

/* function Navbar(){
  return(
    
  )
} */

export default ({navigation})=>{
/* const header =(headerTitle , headerShown)=>({
  header: props => <Navbar {...props} title={title} backRoute={backRoute}/> ,
  headerStyle:{
    backgroundColor: "transparent"
  }

}) */


  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Home" component={Home} options={{
        headerLeft:() => (
          <Feather name="menu" style={{marginLeft:5}} size={26} color="black" onPress={()=> navigation.openDrawer()}/>
        ), headerTitleAlign:"center"}} />
      <Stack.Screen name="User" component={userHomeContainer} />
      <Stack.Screen
        name="SingleUserTransaction"
        component={SingleUserTransactionContainer}
      />
      <Stack.Screen name="Login" component={LoginContainer} options={{headerShown:false}} />
      <Stack.Screen name="Verificar" component={verifityEmail} options={{headerShown:false}} />
      <Stack.Screen name="successRegister" component={successRegister} options={{headerShown:false}}/>
      <Stack.Screen name="Register" component={registerContainer} options={{headerShown:false}}/>
      <Stack.Screen name="SelectAmount" component={SelectAmountContainer} />
      <Stack.Screen
        name="SelectOtherAmount"
        component={SelectOtherAmountContainer}
      />
      <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfileContainer}
      />
      <Stack.Screen name="EditAgentProfile" component={EditAgentContainer} />
      <Stack.Screen name="AddAccounts" component={AddAccountsContainer} />
    </Stack.Navigator>
  );
}
