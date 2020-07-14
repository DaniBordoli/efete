import React ,{useState} from "react";

import { View, Text, Linking } from "react-native";
import {style} from './style'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'nunito': require('../../../assets/fonts/Nunito-Black.ttf')
  });
  };


export default () => {
  const [dataload, setDataload]= useState(false)

  if(!dataload){
    return (
      <AppLoading
      startAsync={fetchFonts}
      onFinish={()=> setDataload(true)}
      />
    )
  }

  return (
    <View style={style.centrar}>
      <Text style={style.text}>Efete</Text>
      <Text style={style.text2}>¡Gracias por registrarte!</Text>
      <Text style={style.text3}>Te enviaremos un Email para que confirmes tu correo.</Text>
      <View style={{display:"flex",flexDirection:"row", justifyContent:'center' , marginTop:150}}>
      <Text style={style.text4}>Para verificar tu Email</Text>
      <Text style={style.input} onPress={() => Linking.openURL('https://mail.google.com/')}>Ingrese Aqui</Text> 
      </View>
      
    </View>
  )
}
