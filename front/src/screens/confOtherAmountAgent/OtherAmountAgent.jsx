import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { headerColor, buttonColor, fondoColor, buttonDark } from "../../Common/constans";
import { Button } from "react-native-elements";

const OtherAmountAgent = ({
  handlerValue,
  handlerSubmit,
  value,
  navigation,
  mode,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
      <Text style={style.monto}>Monto</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Text style={{ fontSize: 25, color: mode ? "black" : "white" }}>$</Text>
        <TextInput
          style={mode ? style.input : style.inputDark} 
          keyboardType="numeric"
          onChangeText={(value) => handlerValue(value)}
          value={value.toString()}
        />
      </View>
      {/* {value < 100 ? (
        <Text> Monto: ${value} - El monto debe ser mayor a $100</Text>
      ) : (
        <Text> Monto: ${value}</Text>
      )} */}

      {/* {value < 100
         ?
         <Text> Monto: ${value} - El monto debe ser mayor a $100</Text>
         :
         <Text> Monto: ${value}</Text>
         } */}
      <View style={style.contBotones}>
        {value < 100 ? (
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
              handlerSubmit();
              navigation.navigate("ConfirmAgentLoad"); // Deberia llevar a una vista de confirmación
            }}
          />
        )}

        <Button
          buttonStyle={mode ? style.cancelar : style.cancelarDark}
          titleStyle={mode ? style.tituloCancelar : style.tituloCancelarDark}
          title="Cancelar"
          onPress={() => {
            navigation.navigate("Agent"); //Cancelar devuelve al home
          }}
        />
      </View>
    </View>
  );
};

export default OtherAmountAgent;

const style = StyleSheet.create({
  monto: {
    textAlign: "center",
    fontSize: 36,
    fontFamily: "nunito",
    marginTop: 36,
    color: `${headerColor}`,
    marginBottom: 150,
  },
  input: {
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    borderColor: "#807fc7",
  },
  inputDark: {
    textAlign: "center",
    fontSize: 24,
    borderBottomWidth: 1,
    width: "35%",
    alignSelf: "center",
    borderColor: "white",
    color:'white'
  },
  confirmar: {
    width: 160,
    height: 55,
    backgroundColor: `${buttonColor}`,
    marginTop: 10,
    alignSelf: "center",
  },
  tituloConfirmar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
  },
  cancelar: {
    width: 160,
    height: 55,
    backgroundColor: "white",
    marginTop: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: buttonColor,
  },
  tituloCancelar: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: buttonColor,
    fontWeight: "bold",
  },
  contBotones: {
    marginTop: 100,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
  },
  cancelarDark: {
    width: 160,
    height: 55,
    backgroundColor: buttonDark,
    marginTop: 10,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: headerColor
  },
  tituloCancelarDark:{
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: headerColor,
    fontWeight: "bold",
  },
});
