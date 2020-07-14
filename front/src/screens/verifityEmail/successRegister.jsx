import React ,{useState} from "react";

import { View, Text, TextInput } from "react-native";
import {style} from './style'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
  'nunito': require('../../../assets/fonts/Nunito-Black.ttf')
  });
  };


export default ({ navigation }) => {
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
    <View style={style.centrar} >
      <Text style={style.text}>Efetee</Text>
      <Text style={style.text3}>Tu Email ha sido verificado</Text>
      <View style={{display:"flex",flexDirection:"row", justifyContent:'center' , marginTop:150}}>
      <Text style={style.input}  onPress={() => navigation.navigate('Login')}>Ingrese aqui</Text> 
      </View>
      
    </View>
  )
}