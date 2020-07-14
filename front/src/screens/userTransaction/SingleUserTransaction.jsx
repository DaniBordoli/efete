import React from "react";
import { View, Text, Button, Image, Link } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default ( {getOneUserTransaction, navigation} ) =>{
 console.log('Route en el tonto', getOneUserTransaction)

 return(

        <View>
        { getOneUserTransaction.agent ?  (
        <View>
        <Text>Monto: {getOneUserTransaction.amount}</Text>
        <Text>Cuenta de Origen: {getOneUserTransaction.originAccount}</Text>
        <Text>Cuenta de destino: {getOneUserTransaction.destinationAccount}</Text>
        <Text>Agente: {getOneUserTransaction.agent[0].name}</Text> 
        </View>) :
        
        null
     }
        <Button title='Volver a transacciones' onPress={()=> navigation.navigate('User')}></Button>
       </View>
    )

}

