import React from "react";
import { View, Text, Image, Link, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Card, Button } from "react-native-elements";
import { style } from "./style.js";
import { buttonColor } from "../../Common/constans.js";

export default ({ navigation, agentTransactions , mode}) => {
  return (
   <View style={{backgroundColor: 'white', height: '100%'}}> 
    <ScrollView>
    <View style={style.container}>
      {agentTransactions[0] !== undefined ? (
        <View>
          <Text style={style.movimientos}>MOVIMIENTOS</Text>
          <View style={style.cardsCont}>
          <View style={style.hr}></View>

          <FlatList
            keyExtractor={(agentTransactions) => agentTransactions._id}
            data={agentTransactions}
            renderItem={({ item }) => {
              return (
                <View style={style.contCards}>
                <View style={style.cards}>
                     
                    <View style={style.amountcont}> 
                    <Text style={style.amount}>${item.amount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                    </View>
                     
                  <View style={style.infoCont}>
                    <View style={style.bankCont}> 
                    <Text style={style.bank}>{item.originAccount[0].nameEntity[0].nameEntity}</Text>
                  </View>
                    
                  <View style={style.accCont}>  
                    <Text style={style.accNumber}>xxxx-xxxx-xxxx-xx{item.originAccount[0].accountNumber.slice(18, 22)}</Text>
                  </View> 
                  </View>
                  
                </View>

                  <TouchableOpacity
                       style={style.verBtn}
                       onPress={() =>
                       navigation.navigate("SingleAgentTransaction", {
                          item,
                        })
                      }
                    >
                    <Text style={style.titleBtn}>VER TRANSACCION</Text>  
                    </TouchableOpacity>
                   <View style={style.hr}></View>
                </View>
              );
            }}
          ></FlatList>
        </View>
        </View>
      ) : (
        <Text>No hay operaciones todavia</Text>
      )}
    </View>
    </ScrollView>
  </View>
  );
};
