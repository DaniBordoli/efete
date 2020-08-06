import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import { style } from "./style";

export default ({ mode, transaction, navigation }) => {
  console.log(transaction, "WALLY");
  return (
      <ScrollView>
       <View style={style.mainContainer}> 
        <View style={style.container}>
          {transaction.agent ? (
          <View>
          <View style={style.cajas}>
          <Text style={style.mainTitle}>Datos de la transacción</Text>
            <Text style={style.title}>Monto</Text>
            <Text style={style.descriptionOrg}>$ {transaction.amount}</Text>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Cuenta de Origen</Text>
            <View style={style.description}>
            <Text style={style.titulo1}>
              {transaction.originAccount[0].nameEntity[0].nameEntity}
            </Text>
            <Text style={style.titulo2}>
              {transaction.originAccount[0].accountNumber}
            </Text>
            </View>
          </View>

          <View style={style.cajas}>
            <Text style={style.title}>Cuenta de destino</Text>
            <View style={style.description}>
            <Text style={style.titulo1}>
              {transaction.destinationAccount[0].nameEntity[0].nameEntity}</Text>
            <Text style={style.titulo2}>
              {transaction.destinationAccount[0].accountNumber}
            </Text>
          </View>
          </View>

           <TouchableOpacity
            style={style.confirmar}
            title="Confirmar"
            onPress={() => {
              navigation.navigate("Agent");
            }}
          >
            <Text style={style.textConfirmar}>Volver</Text>
          </TouchableOpacity>
        </View>) :
        null
        }
       </View>
      </View>
    </ScrollView>
  );
};
