import React from 'react'
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from './style'


const ConfirmValue = (navigation, value) => {
  return(
    <View style={style.mainContainer}>
      
      <View style={style.imageContainer}>
      <Image  source={require("../../../assets/iconos/arriba.png")}
      style={style.image}
      />
      </View> 
      
         <Text style={style.title}>
          Tu dinero esta listo para ser retirado
         </Text>
         
         <Image
          style={style.icon}
          source={require("../../../assets/icon.png")}
          />

          <View style={style.hr}></View>
        
         <Text style={style.text}>
           Kiosco Juanito
         </Text>
        
         <Text style={style.text1}>
           San Juan 2027, Buenos Aires, Argentina
         </Text>
        
         <Text style={style.text2}>
           $2.800
         </Text>
         
         <View style={style.hr}></View>

      <View style={style.botonesCont}>
         <TouchableOpacity
          style={style.volver}
          title="Cancelar"
          onPress={() => {
          navigation.navigate("User");
          }}>
         <Text style={style.textCancelar}>Cancelar</Text>  
        </TouchableOpacity> 

        <TouchableOpacity
          style={style.confirmar}
          title="Confirmar"
          onPress={() => {
          navigation.navigate("ScannerQR");
          }}>
         <Text style={style.textConfirmar}>Confirmar</Text>  
        </TouchableOpacity> 
     </View>

    </View>
  )   
}

export default ConfirmValue