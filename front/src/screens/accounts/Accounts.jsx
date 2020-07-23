import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";

const Accounts = ({ accountsUser, loading, handleDelete, navigation,mainAccount }) => {
  console.log(mainAccount,"MAIN")
  return (
    <View>
      {loading ? (
        <View>
           <Text style={style.asociadas}> CUENTA PRINCIPAL</Text>
           {mainAccount._id? 
            (
              <View> 

              <TouchableOpacity style={style.parent}
                   onPress={() =>
                   navigation.navigate("SingleAccount", { account: item })}>
                 
     
                 <View style={style.wallet}>
                     <Image source={require("../../../assets/iconos/wallet.png")}  style={{width:50,height:50}}/>
                 </View>
     
                 <View flex={10}>
                     <Text style={style.negrita}>Entidad: {mainAccount.cbu_cvu}</Text>
                         
                     <Text style={style.negrita}> Cuenta: {mainAccount.accountNumber}</Text>
                 </View>
     
                   <TouchableOpacity onPress={() => {handleDelete(mainAccount._id)}}
                   >
     
                     <View style={{marginRight:10}}>
                       <AntDesign name="delete" size={24} color="grey"/>
                     </View>
     
                     </TouchableOpacity>
                 </TouchableOpacity>
               </View>
            )
           :null}
        

          <Text style={style.asociadas}> CUENTAS ASOCIADAS</Text>

                    <FlatList
                      keyExtractor={(accountsUser) => accountsUser._id}
                      data={accountsUser}
                      renderItem={({ item, index }) => {
                        
                        
                        return (
                          
                        <View >
                          {!item.mainAccount? (

                              <TouchableOpacity style={style.parent}
                                onPress={() =>
                                  navigation.navigate("SingleAccount", { account: item })
                                }>

                                <View style={style.wallet} flex={2}>
                                  <Image source={require("../../../assets/iconos/wallet.png")}  style={{width:50,height:50}}/>
                                </View>


                                <View flex={10}>
                                  <Text style={style.negrita}>Entidad:{item.nameEntity[0].nameEntity}</Text>

                                <Text style={style.negrita}>Cuenta:{item.accountNumber}</Text>
                                </View>

                                <TouchableOpacity flex={2}
                                onPress={() => {handleDelete(item._id)}}
                                >
                                

                                <View style={{marginRight:10}}>
                                  <AntDesign name="delete" size={24} color="grey"/>
                                </View>

                                </TouchableOpacity>

                              </TouchableOpacity>

                          ):null}
                        </View>
                        );
                      }}
                    /> 
           <Button
              buttonStyle={style.botonAgregar}
              titleStyle={style.tituloAgregar}
              title="AGREGAR CUENTA"
              onPress={() => {
                navigation.navigate("AddAccounts")
              }}
            />
        </View>
          ) : (
            <View>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          )}
      </View>
      );
    };


export default Accounts;
