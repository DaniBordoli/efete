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
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import OpenCameraContainer from "../camera/OpenCameraContainer";
import ScannerQR from "../QR/scanner";
import GeneratorQR from "../QR/generatorQR";
import createdAgentOkContainer from "../createdAgentOk/createdAgentOkContainer"

const Stack = createStackNavigator();

export default ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CreateAgentForm">
      <Stack.Screen name="QRgenerator" component={GeneratorQR} />
      <Stack.Screen name="QRscanner" component={ScannerQR} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="createdAgentOk"
        component={createdAgentOkContainer}
        options={{ ...myHeader, title: "Establecimiento agregado" }}
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
              name="person-outline"
              style={{ marginRight: 10, color: "white" }}
              size={24}
              color="black"
              onPress={() => navigation.navigate("EditUserProfile")}
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
        options={{ ...myHeader, title: "Transaccion" }}
        component={SingleUserTransactionContainer}
        options={{
          ...myHeader,
          title: "Ver transacción",
        }}
      />

      <Stack.Screen
        name="CreateAgentForm"
        component={CreateAgentFormContainer}
        options={{
          ...myHeader,
          title: "Agregar establecimiento",
        }}
      />
      <Stack.Screen
        name="successRegister"
        component={successRegister}
        options={{ headerShown: false }}
      />
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
      <Stack.Screen
        name="Verificar"
        component={verifityEmail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SelectOtherAmount"
        options={{
          ...myHeader,
          title: "Seleccionar otro monto",
        }}
        component={SelectOtherAmountContainer}
      />
      <Stack.Screen
        name="OpenCamera"
        options={{
          ...myHeader,
          title: "Tomar Foto",
        }}
        component={OpenCameraContainer}
      />
      <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfileContainer}
      />
      <Stack.Screen name="EditAgentProfile" component={EditAgentContainer} />
      <Stack.Screen
        name="Agent"
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
          title: "Perfil agente",
        }}
        component={AgentHomeContainer}
      />
      <Stack.Screen
        name="AllAgentTransactions"
        component={AllAgentTransactionsContainer}
      />
      <Stack.Screen
        name="AllUserTransactions"
        component={AllUserTransactionsContainer}
      />
      <Stack.Screen name="AddAccounts" component={AddAccountsContainer} />
      <Stack.Screen
        name="SelectAccount"
        options={{
          ...myHeader,
          title: "Seleccionar Cuenta",
        }}
        component={SelectAccountContainer}
      />
      <Stack.Screen
        name="TransactionOk"
        component={TransactionOkContainer}
        options={{ headerShown: false }}
      />
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
