import React from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { style } from "./style";

export default ({
  userAccounts,
  handleValue,
  handleSubmit,
  transactionValue,
  loading,
  selectedAccount,
  // handleAgentDailyAmount,
}) => {
  return (
    <View>
      {loading ? (
        <View>
          <Text>Monto para Extraer</Text>
          <Text>{`$ ${transactionValue}`}</Text>

          <FlatList
            keyExtractor={(userAccounts) => userAccounts._id}
            data={userAccounts}
            renderItem={({ item }) => {
              return (
                <Text onPress={() => handleValue(item)}>
                  {item.nameEntity}
                  xxxx-xxxx-xxxx-
                  {item.accountNumber.toString().slice(6)}
                </Text>
              );
            }}
          />
          <Button
            disabled={!selectedAccount._id}
            title="Realizar Transacción"
            onPress={() => {
              handleSubmit();
              // handleAgentDailyAmount();
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
