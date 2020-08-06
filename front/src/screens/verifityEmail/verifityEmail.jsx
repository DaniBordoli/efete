import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { View, Text, Linking, TextInput } from "react-native";
import { style } from "./style";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Button } from "react-native-elements";
import { sendCode } from "../../redux/store/actions/users";

const fetchFonts = () => {
  return Font.loadAsync({
    nunito: require("../../../assets/fonts/Nunito-Black.ttf"),
  });
};

export default ({ navigation }) => {
  const [dataload, setDataload] = useState(false);
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const [valid, setValid]= useState(true)
  const mode = useSelector((state) => state.users.mode);
  const user = useSelector((state) => state.users.user);

  const handleCode = (value) => {
    if(value.length < 6) setValid(true)
    else setValid(false)
    setCode(value)
  };

  const handleSubmit = () => {
    dispatch(sendCode(code, user._id)).then((data) => {
      console.log("DAAATAAAA:::", data)
      if(data.user._id)navigation.navigate("successRegister")
    });
  };

  if (!dataload) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataload(true)} />
    );
  }

  return (
    
    <View style={style.centrar}>
      <Text style={style.text}>Efeté</Text>
      <Text style={style.text2}>¡Gracias por registrarte!</Text>
      <Text style={style.text3}>
        Ingresá el código de verificación para confirmar tu correo.
      </Text>
      <View style={style.inputContainer}>
        <TextInput
          maxLength={6}
          keyboardType="numeric"
          style={style.input}
          onChangeText={(text) => handleCode(text)}
          value={code}
          
        />
      </View>
      {
        user.errorMessage? <Text>{user.errorMessage}</Text> : null
      }

      <Button
        buttonStyle={style.buttonStyle}
        title="ENVIAR"
        titleStyle={style.titleStyle}
        onPress={() => handleSubmit()}
        disabled={valid}
      >
      </Button>

      
    </View>

    
  );
};
