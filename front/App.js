import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import store from "./src/redux/store/index";
import { Provider } from "react-redux";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerMenu from "./src/screens/Navigator/drawer";
import Root from "./src/screens/Navigator/stack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor: '#f7c548'

  }
}

// const customDefaultTheme={
//   ...DefaultTheme,
//   colors:{
//     ...DefaultTheme.colors,
//     headerColor: '#437c90'

//   }
// }



const fetchFonts = () => {
  return Font.loadAsync({
    'nunito': require("./assets/fonts/Nunito-Black.ttf"),
    'delgado': require("./assets/fonts/OpenSans-Light.ttf"),
    'regular': require("./assets/fonts/OpenSans-Regular.ttf")
  });
};

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
      <NavigationContainer>
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
