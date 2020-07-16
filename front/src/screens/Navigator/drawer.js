import React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text } from "react-native";

const Drawer = createDrawerNavigator();

export default (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <Text style={{ fontSize: 30 }}>Efete</Text>
      </View>
      <View>
        <DrawerItem
          label="Login"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "Login" }, props)
          }
        />

        <DrawerItem
          label="Register"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "Register" }, props)
          }
        />

        <DrawerItem
          label="Perfil agente"
          onPress={() =>
            props.navigation.navigate(
              "Root",
              { screen: "EditUserProfile" },
              props
            )
          }
        />

        <DrawerItem
          label="Acerca de esta aplicacion"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "Verificar" }, props)
          }
        />
        <DrawerItem
          label="Cerra sesion"
          onPress={() =>
            props.navigation.navigate("Root", { screen: "User" }, props)
          }
        />
      </View>
    </DrawerContentScrollView>
  );
};
