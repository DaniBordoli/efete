import React from "react";
import { Feather } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../home/home";
import userHomeContainer from "../userHome/userHomeContainer";
import EditUserProfileContainer from "../EditUserProfile/EditUserProfileContainer";
import AddAccountsContainer from "../addAccounts/AddAccountsContainer";
import SelectAmountContainer from "../selectAmount/SelectAmountContainer";
import SelectOtherAmountContainer from "../selectOtherAmount/SelectOtherAmountContainer";
import EditAgentContainer from "../EditAgent/EditAgentContainer";
import SingleUserTransactionContainer from "../userTransaction/SingleUserTransactionContainer";
import verifityEmail from "../verifityEmail/verifityEmail";
import successRegister from "../verifityEmail/successRegister";
import registerContainer from "../register/registerContainer";
import LoginContainer from "../login/LoginContainer";
import AgentHomeContainer from "../agentHome/AgentHomeContainer";
import SingleAgentTransactionContainer from "../agentTransaction/SingleAgentTransactionContainer";
import AllAgentTransactionsContainer from "../allAgentTransactions/AllAgentTransactionsContainer";
import AllUserTransactionsContainer from "../allUserTransactions/AllUserTransactionsContainer";
import ConfAmountAgentContainer from "../confAmountAgent/ConfAmountAgentContainer";
import OtherAmountAgentContainer from "../confOtherAmountAgent/OtherAmountAgentContainer";
import ConfirmAgentLoadContainer from "../ConfirmAgentLoad/ConfirmAgentLoadContainer";
import SelectAccountContainer from "../selectAccount/SelectAccountContainer";
import TransactionOkContainer from "../transactionOk/TransactionOkContainer";
import AccountsContainer from "../accounts/AccountsContainer";
import SingleAccountContainer from "../singleAccount/SingleAccountContainer";
import CreateAgentFormContainer from "../CreateAgentForm/CreateAgentFormContainer";

const Stack = createStackNavigator();

/* function Navbar(){
  return(
    
  )
} */

export default ({ navigation }) => {
  /* const header =(headerTitle , headerShown)=>({
  header: props => <Navbar {...props} title={title} backRoute={backRoute}/> ,
  headerStyle:{
    backgroundColor: "transparent"
  }

}) */

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Feather
              name="menu"
              
              style={{ marginLeft: 5 }}
              size={26}
              color="black"
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerTitleAlign: "center",
          
        }}
      />
      <Stack.Screen
        name="SingleAgentTransaction"
        component={SingleAgentTransactionContainer}
      />
      <Stack.Screen name="User" component={userHomeContainer} />
      <Stack.Screen
        name="SingleUserTransaction"
        component={SingleUserTransactionContainer}
      />
      <Stack.Screen
        name="CreateAgentForm"
        component={CreateAgentFormContainer}
      />
      <Stack.Screen name="successRegister" component={successRegister} />
      <Stack.Screen
        name="SelectOtherAmountAgent"
        component={OtherAmountAgentContainer}
      />
      <Stack.Screen
        name="ConfirmAgentLoad"
        component={ConfirmAgentLoadContainer}
      />
      <Stack.Screen name="Register" component={registerContainer} 
      options={{ headerShown: false }}/>
    
      <Stack.Screen name="SelectAmount" component={SelectAmountContainer} />
      <Stack.Screen
        name="ConfAmountAgent"
        component={ConfAmountAgentContainer}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Verificar" component={verifityEmail} />
      <Stack.Screen
        name="SelectOtherAmount"
        component={SelectOtherAmountContainer}
      />
      <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfileContainer}
      />
      <Stack.Screen name="EditAgentProfile" component={EditAgentContainer} />
      <Stack.Screen name="Agent" component={AgentHomeContainer} />
      <Stack.Screen
        name="AllAgentTransactions"
        component={AllAgentTransactionsContainer}
      />
      <Stack.Screen
        name="AllUserTransactions"
        component={AllUserTransactionsContainer}
      />
      <Stack.Screen name="AddAccounts" component={AddAccountsContainer} />
      <Stack.Screen name="SelectAccount" component={SelectAccountContainer} />
      <Stack.Screen name="TransactionOk" component={TransactionOkContainer} />
      <Stack.Screen name="Accounts" component={AccountsContainer} />
      <Stack.Screen name="SingleAccount" component={SingleAccountContainer} />
    </Stack.Navigator>
  );
};
