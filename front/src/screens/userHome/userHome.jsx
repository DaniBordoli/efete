import React from "react";
import { View, Text, FlatList, Image, Link, Button, TouchableOpacity } from "react-native";
import {style} from './style';


const userHomeContainer = ({ userTransactions, navigation }) => {

  return (
   
    <View>
      <View>
      <Button
       title='Extraccion'
       onPress={()=> navigation.navigate('')}
       />

       <Button
       title='Perfil Agente'
       onPress={()=> navigation.navigate('')}
       />
      
        <Text>Movimientos</Text>
        <FlatList
         keyExtractor={(userTransactions) => userTransactions._id}
         data={userTransactions}
         renderItem={({item})=> {console.log('ITEEEEEM', item)
        return(
        <View>
          <Text>Monto: {item.amount}</Text>
          <Text>Agente: {item.agent[0].name} - {item.agent[0].address}</Text>
          <Text>Extracción realizada</Text> 
          <Button title='ver transaccion' onPress={()=> navigation.navigate('SingleUserTransaction', {id: item._id})}/>
        </View>
        )
      }}
        >
        </FlatList>
      </View>
    </View>
  );
};

export default userHomeContainer