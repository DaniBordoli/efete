import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Home from '../front/src/screens/home/home'
import userHomeContainer from './src/screens/home/userHome/userHomeContainer'
import store from './src/redux/store/index'
import SingleUserTransactionContainer from './src/screens/userTransaction/SingleUserTransactionContainer'

const Stack = createStackNavigator()

export default () =>{
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="User" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="User" component=
            {userHomeContainer} />
             <Stack.Screen name="SingleUserTransaction" component=
            {SingleUserTransactionContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

