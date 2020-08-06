import React from "react";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-elements";

import { style } from "./style.js";
import { fondoColor } from "../../Common/constans.js";

export default ({ handleValue, navigation, value, mode, alert }) => {
  return (
    <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
      <Text style={style.monto}>Monto</Text>

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 25, color: mode ? "black" : "white" }}>$</Text>
        <TextInput
          style={mode ? style.input : style.inputDark}
          keyboardType="numeric"
          onChangeText={(value) => handleValue(value)}
          value={value.toString()}
        />
      </View>
      {alert ? (
        <View>
          <Text style={style.alert}>
            El monto máximo de extracción es $2.000
          </Text>
        </View>
      ) : null}
      <View style={style.contBotones}>
        {value <= 0 || alert ? (
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
              navigation.navigate("Map", { value: value }); // Deberia llevar a una vista de confirmación
            }}
          />
        )}

        <Button
          buttonStyle={mode ? style.cancelar : style.cancelarDark}
          titleStyle={mode ? style.tituloCancelar : style.tituloCancelarDark}
          title="Cancelar"
          onPress={() => {
            navigation.navigate("User"); //Cancelar devuelve al home
          }}
        />
      </View>
    </View>
  );
};
