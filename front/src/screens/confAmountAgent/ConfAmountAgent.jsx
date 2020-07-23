import React from "react";
import { View, Text, FlatList, Button } from "react-native";

const ConfAmountAgent = ({
  handlerValue,
  handlerSubmit,
  navigation,
  value,
}) => {
  const amount = ["1000", "2000", "5000", "10000", "20000"];

  return (
    <View>
      {/* <Text>Seleccionar Monto</Text> */}
      <FlatList
        keyExtractor={(amount) => amount}
        data={amount}
        renderItem={({ item }) => {
          return (
            <Button title={`$ ${item}`} onPress={() => handlerValue(item)} />
          );
        }}
      />

      <Button
        title="Seleccionar otro monto"
        onPress={() => navigation.navigate("SelectOtherAmountAgent")}
      />

      <Text>Monto: ${value}</Text>

      {value === 0 ? (
        <Button title="Confirmar" disabled={true} />
      ) : (
        <Button
          title="Confirmar"
          onPress={() => {
            handlerSubmit();
            navigation.navigate("ConfirmAgentLoad"); // Deberia llevar a una vista de confirmación
          }}
        />
      )}

      <Button
        title="Cancelar"
        onPress={() => {
          navigation.navigate("Agent"); //Cancelar devuelve al home
        }}
      />
    </View>
  );
};

export default ConfAmountAgent;

{
  /* <TextInput
style={styles.input}
autoCapitalize='none'
autoCorrect={false}
value={onChangeInput.inputValue}
onChangeText={onChangeInput.onChangeInput}
/>
<TouchableOpacity
style={styles.button}
onPress={handlerCounter}
/> */
}
