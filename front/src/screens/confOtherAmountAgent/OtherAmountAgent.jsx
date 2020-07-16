import React from 'react';
import { View, Text, TextInput, Button } from 'react-native'

const OtherAmountAgent = ({ handlerValue, handlerSubmit, value, navigation})=>{

    return(
        <View>
            <Text>Selecciona Monto</Text>

            <TextInput
            keyboardType="numeric"
            onChangeText={(value)=> handlerValue(value)}
            value={value}
            />
         

         {value < 100
         ?
         <Text> Monto: ${value} - El monto debe ser mayor a $100</Text>
         :
         <Text> Monto: ${value}</Text>
         }
          

          {/* {value < 100
         ?
         <Text> Monto: ${value} - El monto debe ser mayor a $100</Text>
         :
         <Text> Monto: ${value}</Text>
         } */}

          

    {value  < 100 
    ?  
    <Button 
    title="Confirmar"
    disabled={true}/> 
    :
    <Button 
    title="Confirmar"
    onPress={() => {
    handlerSubmit();
    navigation.navigate("ConfirmAgentLoad"); // Deberia llevar a una vista de confirmación
    }}
    />
    }

         <Button
         title="Volver"
         onPress={()=> navigation.goBack()}
         /> 
       
       
    <Button
    title="Cancelar"
    onPress={() => {
    handlerSubmit();
    navigation.navigate("Home"); //Cancelar devuelve al home
    }}
    />

        </View>
    )


}

export default OtherAmountAgent;