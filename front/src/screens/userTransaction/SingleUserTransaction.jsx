import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements"
import {style} from './style'
import { useNavigation } from "@react-navigation/native";

export default ( {getOneUserTransaction, navigation, getOneTransAccount} ) =>{


 return(
<ScrollView>
   <View style={style.mainContainer}>
        <View style={style.container}>
        { getOneUserTransaction.agent ?  (
        <View >
        
        <View style={style.cajas}>   
        <Text style={style.title}>Monto</Text>
        <Text style={style.description}>$ {getOneUserTransaction.amount}</Text>
        </View> 
        
        <View style={style.cajas}>
        <Text style={style.title}>Comisión</Text>  
        <Text style={style.description}>$ {getOneUserTransaction.comissionTotal}</Text> 
        </View>

        <View style={style.cajas}>
        <Text style={style.title}>Cuenta de Origen</Text>
        <Text style={style.description}>xxxx-xxxx-xxxx-xxxx-xx{getOneTransAccount.toString().slice(18, 22)}</Text>
        </View>
        
        <View style={style.cajas}>
        <Text style={style.title}>Agente</Text>
        <Text style={style.description}>{getOneUserTransaction.agent[0].name} - {getOneUserTransaction.agent[0].address}</Text> 
        </View>

        </View>) :
        
        null
     }
       </View>
   </View>
  </ScrollView>
    )

}

