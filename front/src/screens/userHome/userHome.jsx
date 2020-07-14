import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import {style} from './style'

export default ({ transactions }) => {
  console.log("TRANSACCIONES132:", transactions);
  return (
   
    <View>
   
      <Text style={style.text}>Transacciones</Text>
  
      <FlatList
        keyExtractor={(transactions) => transactions._id}
        data={transactions}
        renderItem={({ item }) => {
          return <Text> ID :{item._id} </Text>;
        }}
      />


    </View>
   
  );
};
