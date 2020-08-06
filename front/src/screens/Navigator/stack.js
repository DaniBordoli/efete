import React from "react";
import { useSelector } from "react-redux";
import { headerColor, headerColorDark } from "../../Common/constans";
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
import AllAgentsContainer from "../allAgents/AllAgentsContainer";
import SingleAccountContainer from "../singleAccount/SingleAccountContainer";
import CreateAgentFormContainer from "../CreateAgentForm/CreateAgentFormContainer";
import createdAgentOkContainer from "../createdAgentOk/createdAgentOkContainer";
import ScannerQR from "../QR/scanner";
import GeneratorQR from "../QR/generatorQR";
import InfoQR from "../QR/infoQR";
import OpenCameraContainer from "../camera/OpenCameraContainer";
import Map from "../Map/mapContainer";
import confirmValueContainer from "../confirmValue/confirmValuecontainer";
import ValidarIdentidadContainer from "../validarIdentidad/ValidarIdentidadContainer";
import WaitingValidationContainer from "../waitingValidation/WaitingValidationContainer";
import DeleteProfileContainer from "../deleteProfile/DeleteprofileContainer";
import TimeGainedContainer from "../timeGained/TimeGainedContainer";

const Stack = createStackNavigator();

export default ({ navigation }) => {
  const header = mode ? myHeader : myHeaderDark;

  const mode = useSelector((state) => state.users.mode);
  const user = useSelector((state) => state.users.user)

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="QRgenerator"
        component={GeneratorQR}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Cobrar con QR",
          headerRight: () => (
            <Feather
              name="info"
              style={{ marginRight: 10 }}
              size={26}
              color="white"
              onPress={() => navigation.navigate("InfoQR")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Mapa",
        }}
      />
      <Stack.Screen
        name="DeleteProfile"
        component={DeleteProfileContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Eliminar perfil",
        }}
      />
      <Stack.Screen
        name="ScannerQR"
        component={ScannerQR}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Escaner QR",
        }}
      />
      <Stack.Screen
        name="InfoQR"
        component={InfoQR}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Todo sobre QR",
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false }}
      />

      <Stack.Screen
        name="createdAgentOk"
        component={createdAgentOkContainer}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="confirmValue"
        component={confirmValueContainer}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SingleAgentTransaction"
        component={SingleAgentTransactionContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Transaccion",
        }}
      />
      <Stack.Screen
        name="User"
        component={userHomeContainer}
        options={{
          headerRight: () => (
            <MaterialIcons
              name="person-outline"
              style={{ marginRight: 10, color: "white" }}
              size={26}
              color="white"
              onPress={() => navigation.navigate("EditUserProfile")
            }
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
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },

          headerTitleAlign: "center",
          title:`Hola, ${user.firstName}`
        }}
      />
      <Stack.Screen
        name="SingleUserTransaction"
        component={SingleUserTransactionContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Ver transacción",
        }}
      />
      <Stack.Screen
        name="TimeGained"
        component={TimeGainedContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Tiempo ganado",
        }}
      />

      <Stack.Screen
        name="CreateAgentForm"
        component={CreateAgentFormContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Tu Negocio",
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
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Seleccionar otro monto",
        }}
        component={OtherAmountAgentContainer}
      />
      <Stack.Screen
        name="ConfirmAgentLoad"
        component={ConfirmAgentLoadContainer}
        options={{ headerShown: false }}
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
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Seleccionar monto",
        }}
        component={SelectAmountContainer}
      />
      <Stack.Screen
        name="ConfAmountAgent"
        component={ConfAmountAgentContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Seleccionar monto",
        }}
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
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Seleccionar otro monto",
        }}
        component={SelectOtherAmountContainer}
      />
      <Stack.Screen
        name="OpenCamera"
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Tomar Foto",
        }}
        component={OpenCameraContainer}
      />
      <Stack.Screen
        name="EditUserProfile"
        component={EditUserProfileContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Mi perfil",
        }}
      />
      <Stack.Screen
        name="EditAgentProfile"
        component={EditAgentContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Tu negocio",
        }}
      />
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
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },

          headerTitleAlign: "center",
          title: "Perfil agente",
        }}
        component={AgentHomeContainer}
      />
      <Stack.Screen
        name="AllAgentTransactions"
        component={AllAgentTransactionsContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Transacciones",
        }}
      />
      <Stack.Screen
        name="AllUserTransactions"
        component={AllUserTransactionsContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Transacciones",
        }}
      />

      <Stack.Screen
        name="AddAccounts"
        component={AddAccountsContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Nueva Cuenta",
        }}
      />

      <Stack.Screen
        name="SelectAccount"
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
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
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          }, headerLeft: () => (
            <MaterialIcons name="arrow-back" size={24} color="white" 
            style={{ marginLeft: 10, color: "white" }}
            
            onPress={() => navigation.navigate("User")}/>
          ),
          title: "Mis Cuentas",
        }}
      />
      <Stack.Screen
        name="AllAgents"
        component={AllAgentsContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Mis Negocios",
        }}
      />
      <Stack.Screen
        name="SingleAccount"
        component={SingleAccountContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Detalle",
        }}
      />

      <Stack.Screen
        name="ValidateIdentity"
        component={ValidarIdentidadContainer}
        options={{
          ...myHeader,
          headerStyle: {
            backgroundColor: mode ? headerColor : headerColorDark,
          },
          title: "Validar identidad",
        }}
      />

      <Stack.Screen
        name="WaitingValidation"
        component={WaitingValidationContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const myHeader = {
  headerTintColor: "white",
  headerTitleStyle: {
    color: "white",
    fontFamily: "regular",
  },
};

const myHeaderDark = {
  headerTintColor: "white",
  headerTitleStyle: {
    color: "white",
    fontFamily: "regular",
  },
  headerStyle: {
    backgroundColor: headerColorDark,
  },
};
