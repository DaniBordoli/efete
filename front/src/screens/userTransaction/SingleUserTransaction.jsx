import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements"
import {style} from './style'

export default ( {getOneUserTransaction, mode, getOneTransAccount, navigation} ) =>{


 return(
<ScrollView>
   <View style={style.mainContainer}>
        <View style={style.container}>
        { getOneUserTransaction.agent ?  (
        <View >
        
        <View style={style.cajas}>   
        <Text style={style.mainTitle}>Datos de la transacción</Text>
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
        <Text style={style.description}>{getOneUserTransaction.agent[0].name} - {getOneUserTransaction.agent[0].address.split(',')[0]}</Text> 
        <TouchableOpacity
            style={style.confirmar}
            title="Confirmar"
            onPress={() => {
              navigation.navigate("User");
            }}
          >
            <Text style={style.textConfirmar}>Volver</Text>
          </TouchableOpacity>
        </View>

        </View>) :
        
        null
     }
       </View>
   </View>
  </ScrollView>
    )

}

