import React from "react";
import { View, Text, FlatList, Button, ActivityIndicator } from "react-native";
import { style } from "./style";

export default ({ agentTransactions, navigation, loading }) => {
  return (
    <View>
      {loading ? (
        agentTransactions[0] !== undefined ? (
          <View>
            <View>
              <Button
                title="Perfil Usuario"
                onPress={() => navigation.navigate("User")}
              />
              <Button
                title="Cobrar con Qr"
               onPress={() => navigation.navigate('Home')}
              />
              <Button
                title="Tu Negocio"
                onPress={() => navigation.navigate("EditAgentProfile")}
              />
              <Button
                title="Modificar monto diario"

                /*  onPress={() => navigation.navigate()} */
              />
            </View>

            <View>
              <Text>Movimientos</Text>
              <View>
                <Text>
                  Monto diario restante:
                  {agentTransactions[0].agent[0].dailyAmount}
                </Text>
              </View>
              <View>
                <FlatList
                  keyExtractor={(agentTransactions) => agentTransactions._id}
                  data={agentTransactions}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <Text>Monto: $ {item.amount}</Text>
                        <Text>Banco: {item.originAccount[0].nameEntity}</Text>
                        <Text>
                          Numero de cuenta:{" "}
                          {item.originAccount[0].accountNumber}
                        </Text>

                        <Text>Extracción realizada</Text>
                        <Button
                          title="ver transaccion"
                          onPress={() =>
                            navigation.navigate("SingleAgentTransaction", {
                              item,
                            })
                          }
                        />
                      </View>
                    );
                  }}
                ></FlatList>
              </View>
              <Button
                title="Ver todas las operaciones"
                onPress={() =>
                  navigation.navigate("AllAgentTransactions", {
                    agentTransactions,
                  })
                }
              />

            </View>

          </View>
        ) : (
          <Text>No tenes transacciones realizadas</Text>
        )
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};
