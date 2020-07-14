import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const AddAccount = ({handleAccount,handleSubmit, account, navigation}) => {

  return (
    <View>
      <Text>Agregar Cuenta</Text>

      <Text>Nombre del Establecimiento</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={account => handleAccount(account)}
      />
      
      <Text>CBU / CVU</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={newValue => setAccount(newValue)}
      />
      {/* {account.length < 16 ? <Text>La cuenta debe contener al menos 16 numeros</Text> : null} */}

      <Text>DNI</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={newValue => setAccount(newValue)}
      />
      {/* {account.length < 22 ? <Text>La cuenta debe contener al menos 22 numeros</Text> : null} */}

      <Button style={styles.button}
      title="Confirmar"
        onPress={() => {
          handleSubmit();
          navigation.navigate("Home");
        }}
        />
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
    margin: 15,
    borderColor: 'blue',
    borderWidth: 1
}
});

export default AddAccount;