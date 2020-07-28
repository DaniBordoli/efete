import React from "react";
import { View, Text, FlatList } from "react-native";
import { style } from "./style";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Load } from "../../Common/loading";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default ({
  userAccounts,
  handleAccount,
  handleSubmit,
  transactionValue,
  loading,
  selectedAccount,
  navigation,
  // handleAgentDailyAmount,
}) => {
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1 }}>
          
          <View style={{flex:6}}>
          <Text style={style.titulo}>Monto Disponible</Text>
          <Text style={style.monto}>{`$ ${transactionValue}`}</Text>
            <FlatList
              keyExtractor={(userAccounts) => userAccounts._id}
              data={userAccounts}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={style.contenedor}
                    onPress={() => handleAccount(item)}
                  >
                    <LinearGradient
                      start={{ x: 0.0, y: 0.25 }}
                      end={{ x: 1.0, y: 1.0 }}
                      colors={["#83898E", "#B2BBC3", "#FFFFFF"]}
                      style={style.accountContainer}
                    >
                      <View style={{ flex: 1 }}>
                        <MaterialCommunityIcons
                          name="bank"
                          size={30}
                          color="white"
                          style={style.bankIcon}
                        />
                      </View>

                      <View style={{ flex: 3 }}>
                        <Text style={style.account}>
                          {item.nameEntity[0].nameEntity.length > 20? item.nameEntity[0].nameEntity.substr(0,16)+'...' : item.nameEntity[0].nameEntity}
                        </Text>
                        <Text style={style.account}>
                          xxxx-xxxx-xxxx-
                          {item.accountNumber.toString().slice(6)}
                        </Text>
                      </View>

                      <View style={{ flex: 1 }}>
                        <MaterialCommunityIcons
                          name="check-circle"
                          size={32}
                          color={
                            selectedAccount._id === item._id ? "green" : "grey"
                          }
                          style={{
                            marginLeft: 10,
                            justifyContent: "flex-end",
                            marginRight: 15,
                          }}
                        />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-evenly",
              alignContent:'center',
              
              flex:1,
            }}
          >
            <Button
              disabled={!selectedAccount._id}
              buttonStyle={style.confirmar}
              titleStyle={style.tituloConfirmar}
              title="Realizar Transacción"
              onPress={() => {
                handleSubmit();
              }}
            />
            <Button
              buttonStyle={style.cancelar}
              titleStyle={style.tituloCancelar}
              title="Agregar cuenta"
              onPress={() => navigation.navigate("AddAccounts")}
            />
          </View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
