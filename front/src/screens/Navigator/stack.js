import React from "react";
import { headerColor } from "../../Common/constans";
import { Feather, MaterialIcons } from "@expo/vector-icons";
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
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

/* function Navbar(){
  return(
    
  )
} */

export default ({ navigation }) => {
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
      <Stack.Screen
        name="User"
        component={userHomeContainer}
        options={{
          headerRight: () => (
            <MaterialIcons
              name="notifications-none"
              style={{ marginRight: 10, color: "white" }}
              size={24}
              color="black"
            />
          ),
          headerLeft: () => (
            <Feather
              name="menu"
              style={{ marginLeft: 10 }}
              size={26}
              color="white"
              onPress={() => navigation.openDrawer()}
            />
          ),
          ...myHeader,

          headerTitleAlign: "center",
          title: "Perfil usuario",
        }}
      />
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
        options={{
          ...myHeader,
          title: "Seleccionar otro monto",
        }}
        component={OtherAmountAgentContainer}
      />
      <Stack.Screen
        name="ConfirmAgentLoad"
        component={ConfirmAgentLoadContainer}
      />
      <Stack.Screen
        name="Register"
        component={registerContainer}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SelectAmount"
        options={{
          ...myHeader,
          title: "Seleccionar monto",
        }}
        component={SelectAmountContainer}
      />
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
        options={{
          ...myHeader,
          title: "Seleccionar otro monto",
        }}
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
      <Stack.Screen
        name="Accounts"
        component={AccountsContainer}
        options={{ ...myHeader, title: "Mis cuentas" }}
      />
      <Stack.Screen name="SingleAccount" component={SingleAccountContainer} />
    </Stack.Navigator>
  );
};

const myHeader = {
  headerTintColor: "white",
  headerTitleStyle: {
    color: "white",
  },
  headerStyle: {
    backgroundColor: headerColor,
  },
};
