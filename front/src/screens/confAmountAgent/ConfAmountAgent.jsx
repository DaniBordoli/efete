import React from "react";
import { style } from './style'
import { View, Text, FlatList, ScrollView } from "react-native";
import { Button } from 'react-native-elements'

const ConfAmountAgent = ({
  handlerValue,
  handlerSubmit,
  navigation,
  value,
}) => {
  const amount = ["1000", "2000", "5000", "10000", "20000"];


   return(
    <View style={{ flex: 1 , backgroundColor:'white'}}>
         <Text style={style.monto}>Monto</Text>
         <Text style={style.valor}>{`$ ${value}`}</Text>
       <View style={style.montoContainer}>
              <FlatList
              keyExtractor={(amount) => amount}
              data={amount}
              renderItem={({item})=>{
                  return(
                  <View>
                      <Button
                      buttonStyle={{ backgroundColor: "white", height: 60 }}
                      titleStyle={{ fontSize: 20, color: "black" }}
                      title={`$ ${item}`}
                      onPress={()=> handlerValue(item)}
                      />
                      <View style={style.hr}/>
                 </View>
                  )   
              }}
            />
             <Button
            buttonStyle={style.otroMonto}
            titleStyle={style.otroMontoTitulo}
            title='Seleccionar otro monto'
            onPress={()=> navigation.navigate('SelectOtherAmountAgent')}
            />
         </View>

    <View style={style.contBotones}>
        {value === 0 
        ?  
        <Button 
        buttonStyle={style.confirmarDisabled}
        titleStyle={style.tituloConfirmarDisabled}
        title="Confirmar"
        disabled={true}/> 
        :
        <Button 
        buttonStyle={style.confirmar}
        titleStyle={style.tituloConfirmar}
        title="Confirmar"
        onPress={() => {
        handlerSubmit();
        navigation.navigate("ConfirmAgentLoad"); // Deberia llevar a una vista de confirmación
        }}
        />
      }

        <Button
        buttonStyle={style.cancelar}
        titleStyle={style.tituloCancelar}
        title="Cancelar"
        onPress={() => {
        navigation.navigate("Agent"); //Cancelar devuelve al home
        }}
    />
   </View>
</View>   
    )
}


export default ConfAmountAgent;
