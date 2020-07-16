import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { style } from "./style";

export default ({ handleValue, navigation, handleSubmit, value }) => {
  return (
    <View>
      <Text>Seleccionar Monto</Text>

      <TextInput
        keyboardType="numeric"
        onChangeText={(value) => handleValue(value)}
        value={value}
      />

    {value  <= 0
    ?  
    <Button 
    title="Confirmar"
    disabled={true}/> 
    :
    <Button 
    title="Confirmar"
    onPress={() => {
    handlerSubmit();
    navigation.navigate("ConfirmAgentLoad"); // Deberia llevar a una vista de confirmación
    }}
    />
    }
    </View>
  );
};
