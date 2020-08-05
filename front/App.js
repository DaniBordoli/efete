import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import store from "./src/redux/store/index";
import { Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenu from "./src/screens/Navigator/drawer";
import Root from "./src/screens/Navigator/stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import {YellowBox} from 'react-native';



const fetchFonts = () => {
  return Font.loadAsync({
    'nunito-bold': require("./assets/fonts/Nunito-Black.ttf"),
    'nunito': require("./assets/fonts/Nunito-Bold.ttf"),
    'delgado': require("./assets/fonts/OpenSans-Light.ttf"),
    'regular': require("./assets/fonts/OpenSans-Regular.ttf"),
    'sans': require("./assets/fonts/IBMPlexSans-Regular.ttf"),
    'sans-bold': require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    'lato': require("./assets/fonts/Lato-Regular.ttf"),
    'Roboto_medium': require("./assets/fonts/Roboto-Medium.ttf"),
  });
};
console.disableYellowBox = true
const Drawer = createDrawerNavigator();

export default () => {

  const [dataload, setDataload] = useState(false);

  if (!dataload) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataload(true)} />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Drawer.Navigator
          initialRouteName="Root"
          drawerType="slide"
          drawerContent={(props) => <DrawerMenu {...props} />}
        >
          <Drawer.Screen
            name="Root"
            component={Root}
            options={{ gestureEnabled: false}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
