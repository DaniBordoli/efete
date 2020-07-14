import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

const AddAccount = ({handleNameAccount,handleDni, handleCbu, handleSubmit, account, navigation}) => {

  return (
    <View>
      <Text>Agregar Cuenta</Text>

      <Text>Nombre del Establecimiento</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={name => handleNameAccount(name)}
      />
      
      <Text>CBU / CVU</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={cbu => handleCbu(cbu)}
      />
      {/* {account.length < 16 ? <Text>La cuenta debe contener al menos 16 numeros</Text> : null} */}

      <Text>DNI</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={account}
        onChangeText={dni => handleDni(dni)}
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