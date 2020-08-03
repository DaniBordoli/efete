import React from "react";
import { View, Text, Image, Link, FlatList, TouchableOpacity, ScrollView } from "react-native";
import {style} from './style'
import { Button } from "react-native-elements"
export default ({ navigation, userTransactions }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
    <ScrollView>
    <View style={style.container}>
      {userTransactions ? (
        <View>
          <Text style={style.movimientos}>MOVIMIENTOS</Text>  
          <View style={style.cardsCont}>
          <View style={style.hr}></View>

          <FlatList
            keyExtractor={(userTransactions) => userTransactions._id}
            data={userTransactions}
            renderItem={({ item }) => {
              return (
               <View style={style.contCards}> 
                <View style={style.card}>

                  <View style={style.amountCont}>
                  <Text style={style.amount}>${item.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                  </View>

                  <View style={style.inCont}>
                  <View style={style.agentCont}>
                  <Text style={style.agent}>{item.agent[0].name}</Text>
                  </View>

                 <View style={style.addressCont}>
                 <Text style={style.address}>San Juan 2705</Text>
                 </View>   


                  <Text style={style.realizada}>EXTRACCIÓN REALIZADA</Text>
          
                </View>
               </View>
               <TouchableOpacity
                style={style.verBtn}
                onPress={() =>
                  navigation.navigate("SingleUserTransaction", {
                    id: item._id,
                  })
                }
                >
                <Text style={style.titleBtn}>VER TRANSACCIÓN</Text>  
              </TouchableOpacity>
              <View style={style.hr}></View>
              </View>
              );
            }}
            
          ></FlatList>
        </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  </ScrollView>
  </View>
  );
};

// - {item.agent[0].address.split(',')[0]}
