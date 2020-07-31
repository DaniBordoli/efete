import React from "react";
import { View, Text, Button, Image, Link, FlatList } from "react-native";
import {style} from './style'
export default ({ navigation, userTransactions }) => {
  //Tiene sentido poner un ternario si no estoy buscando algo al back y la info la paso por props?
  return (
    <View style={style.container}>
      {userTransactions ? (
        <View>
          <Text style={style.movimientos}>Movimientos</Text>  
          <View style={style.cardsCont}>
          <FlatList
            keyExtractor={(userTransactions) => userTransactions._id}
            data={userTransactions}
            renderItem={({ item }) => {
              return (
                <View style={style.card}>

                  <View style={style.description}>
                  <Text style={style.title}>Monto</Text>
                  <Text>{item.amount}</Text>
                  </View>

                  <View style={style.description}>
                  <Text style={style.title}>Agente</Text>
                  <Text>{item.agent[0].name} - {item.agent[0].address.split(',')[0]}</Text>
                  </View>

                  <Text style={style.realizada}>Extracción realizada</Text>
                  <Button
                    title="ver transaccion"
                    onPress={() =>
                      navigation.navigate("SingleUserTransaction", {
                        id: item._id,
                      })
                    }
                  />
                </View>
              );
            }}
          ></FlatList>
        </View>
        </View>
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
      <Button
        title="Volver a mi perfil"
        onPress={() => navigation.navigate("User")}
      ></Button>
    </View>
  );
};
