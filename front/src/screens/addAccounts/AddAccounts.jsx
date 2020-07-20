import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const AddAccount = ({
  handleNameAccount,
  handleAccountNumber,
  handleCbu,
  handleSubmit,
  navigation,
}) => {
  return (
    <View>
      <Text>Entidad</Text>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(name) => handleNameAccount(name)}
      />

      <Text>CBU / CVU</Text>
      <TextInput
  
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(cbu) => handleCbu(cbu)}
      />
      {/* {account.length < 16 ? <Text>La cuenta debe contener al menos 16 numeros</Text> : null} */}

      <Text>Número de Cuenta</Text>
      <TextInput
       
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(accountNumber) => handleAccountNumber(accountNumber)}
      />
      {/* {account.length < 22 ? <Text>La cuenta debe contener al menos 22 numeros</Text> : null} */}

      <Button
        style={styles.button}
        title="Confirmar"
        onPress={() => {
          handleSubmit();
          navigation.navigate("Accounts");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
  button: {
    margin: 50,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },

  drop: {
    margin: 50,
    borderColor: "black",
    borderWidth: 1,
    flex: 1,
  },
});

export default AddAccount;
