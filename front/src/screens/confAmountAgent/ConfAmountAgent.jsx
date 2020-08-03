import React from "react";
import { style } from './style'
import { View, Text, FlatList, ScrollView } from "react-native";
import { Button } from 'react-native-elements'
import { headerColorDark } from "../../Common/constans";

const ConfAmountAgent = ({
  handlerValue,
  handlerSubmit,
  navigation,
  value,
  mode
}) => {
  const amount = ["1000", "2000", "5000", "10000", "20000"];


   return(
    <View style={{ flex: 1 , backgroundColor:mode ? '#F1F3F6' : 'black'}}>
         <Text style={style.monto}>Monto</Text>
         <Text style={mode ?style.valor : style.valorDark}>{`$ ${value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}`}</Text>
       <View style={style.montoContainer}>
              <FlatList
              keyExtractor={(amount) => amount}
              data={amount}
              renderItem={({item})=>{
                  return(
                  <View>
                      <Button
                      buttonStyle={{  backgroundColor: mode? "white": headerColorDark, height: 60 }}
                      titleStyle={{ fontSize: 20, color:mode? "black": 'white'  }}
                      title={`$ ${item}`}
                      onPress={()=> handlerValue(item)}
                      />
                      <View style={style.hr}/>
                 </View>
                  )   
              }}
            />
             <Button
           buttonStyle={mode ?style.otroMonto : style.otroMontoDark}
           titleStyle={mode ? style.otroMontoTitulo : style.otroMontoTituloDark}
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
        buttonStyle={mode ? style.cancelar : style.cancelarDark}
        titleStyle={mode ? style.tituloCancelar : style.tituloCancelarDark}
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
