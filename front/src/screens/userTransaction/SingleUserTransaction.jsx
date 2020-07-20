import React from "react";
import { View, Text, Button, Image, Link } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default ( {getOneUserTransaction, navigation} ) =>{

 return(

        <View>
        { getOneUserTransaction.agent ?  (
        <View>
        <Text>Monto: ${getOneUserTransaction.amount}</Text>
        <Text>Comisión: ${getOneUserTransaction.comissionTotal}</Text> 
        <Text>Cuenta de Origen: {getOneUserTransaction.originAccount}</Text>
        <Text>Agente: {getOneUserTransaction.agent[0].name} - {getOneUserTransaction.agent[0].address}</Text> 
        </View>) :
        
        null
     }
        <Button title='Volver a transacciones' onPress={()=> navigation.navigate('User')}></Button>
       </View>
    )

}

