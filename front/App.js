import React from "react";
import store from "./src/redux/store/index";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenu from "./src/screens/Navigator/drawer";
import Root from "./src/screens/Navigator/stack";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Root"
          drawerType="slide"
          drawerContent={(props) => <DrawerMenu {...props} />}
        >
          <Drawer.Screen
            name="Root"
            component={Root}
            options={{ gestureEnabled: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
