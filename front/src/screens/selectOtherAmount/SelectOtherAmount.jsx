import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";

import { style } from "./style.js";

export default ({ handleValue, navigation, value }) => {
  return (
    <View>
      <Text style={style.monto}>Monto</Text>
      <TextInput
        style={style.input}
        keyboardType="numeric"
        onChangeText={(value) => handleValue(value)}
        value={value}
      />

      {value <= 0 ? (
        <Button
          buttonStyle={style.confirmar}
          titleStyle={style.tituloConfirmar}
          title="Confirmar"
          disabled={true}
        />
      ) : (
        <Button
          buttonStyle={style.confirmar}
          titleStyle={style.tituloConfirmar}
          title="Confirmar"
          onPress={() => {
            navigation.navigate("ScannerQR", { value: value }); // Deberia llevar a una vista de confirmación
          }}
        />
      )}
    </View>
  );
};
