import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
// import { useTheme } from '@react-native/navigation'
import { colors, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { buttonColor, violetaOscuro } from "../../Common/constans";

export default ({ 
  navigation, 
  transaction, 
  mode}) => {
  return (
  <ScrollView>
    <View style={style.mainContainer}>
     <View style={style.imageContainer}>
          <Image
            source={require("../../../assets/iconos/arriba.png")}
            style={style.image}
          />
      </View>
      
     

     <Text style={style.titulo}>TRANSACCIÓN REALIZADA</Text>

         <View >
        <Image  source={require("../../../assets/icon.png")} />
        </View>

        <View style={style.hr}></View>
        

       {/*  <Text style={style.text}>Kisosko San Juan</Text> */}
        <Text style={style.text}>{transaction.agent[0].name}</Text>
       
        {/* <Text style={style.text1}>Av San Juan 2705</Text> */}
        <Text style={style.text1}>{transaction.agent[0].address}</Text>

        {/* <Text style={style.content}>Banco Santander</Text> */}
        
        <Text style={style.content}>
          {transaction.originAccount[0].nameEntity[0].nameEntity}
        </Text>

       {/* <Text style={style.text3}>9890990000898767652432</Text> */}
        <Text style={style.text3}>
          {transaction.originAccount[0].accountNumber}
        </Text>
        
        {/* <Text style={style.text2}>2.000</Text> */}
        <Text style={style.text2}>${transaction.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</Text>

        <View style={style.hr}></View>

      <View>
        <Button
          buttonStyle={style.confirmar}
          titleStyle={style.tituloConfirmar}
          title="Descargar Comprobante"
          onPress={() => {
            console.log("se apreta");
          }}
        />
         <TouchableOpacity
        style={style.clearIcon}
        onPress={() => {
          navigation.navigate("User");
        }}
      >
        <Text style={{color:violetaOscuro , fontSize:20,fontWeight:'bold'}}>Cancelar</Text>
     </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
};
