import React from 'react'
import { View, Text, FlatList, Button, Image, TouchableOpacity,  ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native'
import { style } from './style'


const ConfirmAgentLoad = ({ value , mode}) => {

    const navigation = useNavigation();

    return(
      <ScrollView>
    <View style={style.container}>
      
      <View style={style.imageCont}>
      <Image  source={require("../../../assets/iconos/arriba.png")}
        style={style.image}
        /> 
        </View>
        
          <Text style={style.title}>Confirmación de carga</Text>
          <Image
          style={style.icon}
          source={require("../../../assets/icon.png")}
          />

         <View style={style.hr}></View>
          
          <Text style={style.text}>Felicitaciones has realizado una recarga de: </Text> 
         <Text style={style.valor}>${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>          

         <View style={style.hr}></View>
        
        <TouchableOpacity
        style={style.volver}
        title="Volver a Agente"
        onPress={() => {
        navigation.navigate("Agent");
        }}
         >
         <Text style={style.textConfirmar}>VOLVER A AGENTE</Text>  
        </TouchableOpacity>  

    </View>
  </ScrollView>
   
    )
}

export default ConfirmAgentLoad;

// Felicitaciones has realizado una recarga de: ${value} pesos