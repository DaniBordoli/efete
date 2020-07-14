import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Home from '../front/src/screens/home/home'
import userHomeContainer from './src/screens/home/userHome/userHomeContainer'
import store from './src/redux/store/index'
import SingleUserTransactionContainer from './src/screens/userTransaction/SingleUserTransactionContainer'
import React from "react";
import store from "./src/redux/store/index";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Home from "../front/src/screens/home/home";
import userHomeContainer from "./src/screens/userHome/userHomeContainer";
import verifityEmail from "./src/screens/verifityEmail/verifityEmail";
import successRegister from "./src/screens/verifityEmail/successRegister";
import registerContainer from "./src/screens/register/registerContainer";
import SelectAmountContainer from "./src/screens/selectAmount/SelectAmountContainer";
import AddAccountsContainer from "./src/screens/accounts/AddAccountsContainer";
import SelectOtherAmountContainer from "./src/screens/selectOtherAmount/SelectOtherAmountContainer";

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="User" component=
            {userHomeContainer} />
             <Stack.Screen name="SingleUserTransaction" component=
            {SingleUserTransactionContainer} />
            <Stack.Navigator initialRouteName="Home"/>
            <Stack.Screen name="Verificar" component={verifityEmail} />
            <Stack.Screen name="User" component={userHomeContainer} />
            <Stack.Screen name="successRegister" component={successRegister} />
            <Stack.Screen name="Register" component={registerContainer} />
            <Stack.Screen name="selectAmount" component={SelectAmountContainer} />
            <Stack.Screen name="selectOtherAmount" component={SelectOtherAmountContainer}/>
          <Stack.Screen name="AddAccounts" component={AddAccountsContainer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
