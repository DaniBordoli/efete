import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Home from '../front/src/screens/home/home';
import userHomeContainer from './src/screens/home/userHome/userHomeContainer'
import AddAccountsContainer from "./src/screens/accounts/AddAccountsContainer"
import AddAccounts from "./src/screens/accounts/AddAccounts"
import store from './src/redux/store/index'

const Stack = createStackNavigator()

export default () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AddAccounts">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={userHomeContainer} />
          <Stack.Screen
            name="AddAccounts"
            component={AddAccountsContainer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

