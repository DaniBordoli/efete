import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { style } from "./style.js";
import { Button } from "react-native-elements";
import { headerColorDark } from "../../Common/constans.js";

export default ({ handleValue, navigation, mode, value, map }) => {
  const data = ["100", "200", "500", "1000", "2000"];
  return (
    <ScrollView style={{ backgroundColor: mode ? "#F1F3F6" : "black" }}>
      <View style={{ flex: 1, backgroundColor: mode ? "#F1F3F6" : "black" }}>
        <Text style={style.monto}>Monto</Text>
        <Text style={mode ? style.valor : style.valorDark}>{`$ ${value}`}</Text>
        <View style={style.montoContainer}>
          <FlatList
            keyExtractor={(data) => data}
            data={data}
            renderItem={({ item }) => {
              return (
                <View>
                  <Button
                    buttonStyle={{
                      backgroundColor: mode ? "white" : headerColorDark,
                      height: 60,
                    }}
                    titleStyle={{
                      fontSize: 20,
                      color: mode ? "black" : "white",
                    }}
                    title={`$ ${item}`}
                    on
                    onPress={() => handleValue(item)}
                  />
                  <View style={style.hr} />
                </View>
              );
            }}
          />
          <Button
            buttonStyle={mode ? style.otroMonto : style.otroMontoDark}
            titleStyle={
              mode ? style.otroMontoTitulo : style.otroMontoTituloDark
            }
            title="Seleccionar otro monto"
            onPress={() => navigation.navigate("SelectOtherAmount")}
          />
        </View>

        <View style={style.contBotones}>
          {value === 0 ? (
            <Button
              buttonStyle={style.confirmarDisabled}
              titleStyle={style.tituloConfirmarDisabled}
              title="Confirmar"
              disabled={true}
            />
          ) : (
            <Button
              buttonStyle={style.confirmar}
              titleStyle={style.tituloConfirmar}
              title="Confirmar"
              onPress={() => {
                map
                  ? navigation.navigate("Map", { value: value })
                  : navigation.navigate("ScannerQR", { value: value });
              }}
            />
          )}

          <Button
            buttonStyle={mode ? style.cancelar : style.cancelarDark}
            titleStyle={mode ? style.tituloCancelar : style.tituloCancelarDark}
            title="Cancelar"
            onPress={() => {
              navigation.navigate("User");
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
