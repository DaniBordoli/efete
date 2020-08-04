import React, { useState } from "react";
import { useSelector } from "react-redux";

import { View, Text, TextInput, Image } from "react-native";
import { style } from "./style";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Button } from "react-native-elements";

const fetchFonts = () => {
  return Font.loadAsync({
    nunito: require("../../../assets/fonts/Nunito-Black.ttf"),
  });
};

export default ({ navigation }) => {
  const [dataload, setDataload] = useState(false);

  const mode = useSelector((state) => state.users.mode);

  if (!dataload) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataload(true)} />
    );
  }

  return (
    <View style={style.centrar}>
      <View style={style.imageCont}>
        <Image
          source={require("../../../assets/iconos/arriba.png")}
          style={style.image}
        />
      </View>
      <Text style={style.text}>Efeté</Text>
      <Text style={style.text3}>Tu Email ha sido verificado</Text>
      <View style={style.inputContainer}>
        <Button
          onPress={() => navigation.navigate("Login")}
          buttonStyle={style.buttonStyle}
          titleStyle={style.titleStyle}
          title="ACCEDER"
        >
          <Text>ACCEDER</Text>
        </Button>
      </View>
    </View>
  );
};
