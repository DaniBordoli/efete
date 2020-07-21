import React from "react";
import { View, Text, FlatList ,ScrollView,} from "react-native";
import { style } from "./style.js";
import { Button } from "react-native-elements";

export default ({ handleValue, navigation, handleSubmit, value }) => {
  const data = ["100", "200", "500", "1000", "2000"];
  return (
   

    
    <View style={{flex:1}} >
      <Text style={style.monto}>Monto</Text>
      <Text style={style.valor}>{value}</Text>
      <View style={style.montoContainer}>
        <FlatList
          keyExtractor={(data) => data}
          data={data}
          renderItem={({ item }) => {
            return (
              <View>
                <Button
                  buttonStyle={{ backgroundColor: "white", height: 60 }}
                  titleStyle={{ fontSize: 20, color: "black"}}
                  title={`${item}`}
                  on
                  onPress={() => handleValue(item)}
                />
                <View style={style.hr} />
              </View>
            );
          }}
        />
        <Button
          buttonStyle={style.otroMonto}
          titleStyle={style.otroMontoTitulo}
          title="Seleccionar otro monto"
          onPress={() => navigation.navigate("SelectOtherAmount")}
        />
      </View>

      
      <Button
      buttonStyle={style.confirmar}
      titleStyle={style.tituloConfirmar}
        title="Confirmar"
        onPress={() => {
          navigation.navigate("SelectAccount", { value: value });
        }}
      />
    </View>
  );
};
