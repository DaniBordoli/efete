import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { style } from "./style.js";
import { Button } from "react-native-elements";

export default ({ handleValue, navigation, handleSubmit, value }) => {
  const data = ['100', '200', '500', '1000', '2000'];
  return (
   <ScrollView>
    <View style={{ flex: 1 }}>
      <Text style={style.monto}>Monto</Text>
      <Text style={style.valor}>{`$ ${value}`}</Text>
      <View style={style.montoContainer}>
        <FlatList
          keyExtractor={(data) => data}
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Button
                  buttonStyle={{ backgroundColor: "white", height: 60 }}
                  titleStyle={{ fontSize: 20, color: "black" }}
                  title={`$ ${item}`}
                  on
                  onPress={() => handleValue(item)}
                />
                <View style={style.hr} />
              </View>
            )
          }}
        />
        <Button
          buttonStyle={style.otroMonto}
          titleStyle={style.otroMontoTitulo}
          title="Seleccionar otro monto"
          onPress={() => navigation.navigate("SelectOtherAmount")}
        />
      </View>
      
    <View style={style.contBotones}>
      {value === 0 
      ?  
      <Button 
      buttonStyle={style.confirmarDisabled}
      titleStyle={style.tituloConfirmarDisabled}
      title="Confirmar"
      disabled={true}/> 
      :
      <Button
      buttonStyle={style.confirmar}
      titleStyle={style.tituloConfirmar}
      title="Confirmar"
      onPress={() => {
      navigation.navigate("QRscanner", { value: value });
        }}
      />
      }

      <Button
        buttonStyle={style.confirmar}
        titleStyle={style.tituloConfirmar}
        title="Cancelar"
        onPress={() => {
        navigation.navigate("ScannerQR", { value: value });
        }}
    />
  </View>
    </View>
</ScrollView>
  );
};
