import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../front/src/screens/home/home";
import userHomeContainer from "./src/screens/userHome/userHomeContainer";
import AgentHomeContainer from "./src/screens/agentHome/AgentHomeContainer";
import EditUserProfileContainer from "./src/screens//EditUserProfile/EditUserProfileContainer";
import AddAccountsContainer from "./src/screens/accounts/AddAccountsContainer";
import SelectAmountContainer from "./src/screens/selectAmount/SelectAmount";
import SelectOtherAmountContainer from "./src/screens/selectOtherAmount/SelectOtherAmountContainer";
import EditAgentContainer from "./src/screens/EditAgent/EditAgentContainer";
import store from "./src/redux/store/index";
import SingleUserTransactionContainer from "./src/screens/userTransaction/SingleUserTransactionContainer";
import SingleAgentTransactionContainer from "./src/screens/agentTransaction/SingleAgentTransactionContainer";
import AllAgentTransactionsContainer from "./src/screens/allAgentTransactions/AllAgentTransactionsContainer";
import AllUserTransactionsContainer from "./src/screens/allUserTransactions/AllUserTransactionsContainer";
import { Provider } from "react-redux";
import verifityEmail from "./src/screens/verifityEmail/verifityEmail";
import successRegister from "./src/screens/verifityEmail/successRegister";
import registerContainer from "./src/screens/register/registerContainer";
import LoginContainer from "./src/screens/login/LoginContainer";

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Agent">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={userHomeContainer} />
          <Stack.Screen name="Agent" component={AgentHomeContainer} />
          <Stack.Screen
            name="SingleUserTransaction"
            component={SingleUserTransactionContainer}
          />
          <Stack.Screen
            name="SingleAgentTransaction"
            component={SingleAgentTransactionContainer}
          />
          <Stack.Screen
            name="AllAgentTransactions"
            component={AllAgentTransactionsContainer}
          />
          <Stack.Screen
            name="AllUserTransactions"
            component={AllUserTransactionsContainer}
          />
          <Stack.Screen name="Login" component={LoginContainer} />
          <Stack.Screen name="Verificar" component={verifityEmail} />
          <Stack.Screen name="successRegister" component={successRegister} />
          <Stack.Screen name="Register" component={registerContainer} />
          <Stack.Screen name="SelectAmount" component={SelectAmountContainer} />
          <Stack.Screen
            name="SelectOtherAmount"
            component={SelectOtherAmountContainer}
          />
          <Stack.Screen
            name="EditUserProfile"
            component={EditUserProfileContainer}
          />
          <Stack.Screen
            name="EditAgentProfile"
            component={EditAgentContainer}
          />
          <Stack.Screen name="AddAccounts" component={AddAccountsContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
