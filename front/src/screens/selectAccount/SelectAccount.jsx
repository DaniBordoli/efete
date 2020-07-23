import React from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import { style } from "./style";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    <View>
      {loading ? (
        <View>
          <Text style={style.titulo}>Monto Disponible</Text>
          <Text style={style.monto}>{`$ ${transactionValue}`}</Text>
          <View>
            <FlatList
              keyExtractor={(userAccounts) => userAccounts._id}
              data={userAccounts}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={
                      selectedAccount._id === item._id
                        ? style.accountContainerFocus
                        : style.accountContainer
                    }
                    onPress={() => handleAccount(item)}
                  >
                    <Image
                      style={style.bankIcon}
                      source={require("../../../assets/iconos/Bank.png")}
                    />
                    <View>
                      <Text style={style.account}>
                        {item.nameEntity[0].nameEntity}
                      </Text>
                      <Text style={style.account}>
                        xxxx-xxxx-xxxx-
                        {item.accountNumber.toString().slice(6)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View>
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
              buttonStyle={style.confirmar}
              titleStyle={style.tituloConfirmar}
              title="Agregar nueva cuenta"
              onPress={() => navigation.navigate("AddAccounts")}
            />
          </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
