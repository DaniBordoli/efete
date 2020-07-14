import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Home from "../front/src/screens/home/home";
import userHomeContainer from "./src/screens/home/userHome/userHomeContainer";
import EditUserProfileContainer from "./src/screens/home/EditUserProfile/EditUserProfileContainer";
import store from "./src/redux/store/index";
import SelectAmountContainer from "./src/screens/selectAmount/SelectAmount";
import SelectOtherAmountContainer from "./src/screens/selectOtherAmount/SelectOtherAmountContainer";
import EditAgentContainer from "./src/screens/home/EditAgent/EditAgentContainer";

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="EditAgentProfile">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="User" component={userHomeContainer} />
          <Stack.Screen name="selectAmount" component={SelectAmountContainer} />
          <Stack.Screen
            name="selectOtherAmount"
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
