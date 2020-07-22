import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";

export default ({ agentTransactions, navigation, loading, time }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {loading ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("User")}
            >
              <Image
                source={require("../../../assets/iconos/extraccion.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Perfil Usuario</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              /* onPress={() => navigation.navigate("User")} */
            >
              <Image
                source={require("../../../assets/iconos/extraccion.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Cobrar con Qr</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("EditAgentProfile")}
            >
              <Image
                source={require("../../../assets/iconos/extraccion.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Tu Negocio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("EditAgentProfile")}
            >
              <Image
                source={require("../../../assets/iconos/extraccion.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Modificar monto diario</Text>
            </TouchableOpacity>
          </View>

          {agentTransactions[0] ? (
            <Animatable.View
              animation="fadeInUpBig"
              style={style.movimientosContainer}
            >
              <Text style={style.movimientos}>Movimientos</Text>
              <Text style={style.time}>{time.toUpperCase()}</Text>
              <View>
                <Text>
                  Monto diario restante:
                  {agentTransactions[0].agent[0].dailyAmount}
                </Text>
              </View>
              <View style={style.hr} />

              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(agentTransactions) => agentTransactions._id}
                data={agentTransactions}
                renderItem={({ item }) => {
                  return (
                    <View style={{ height: 90, flex: 1 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          height: 90,
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={{ marginLeft: 17 }}>
                          <Text>Monto: $ {item.amount}</Text>
                          <Text>Banco: {item.originAccount[0].nameEntity}</Text>
                          <Text>
                            Numero de cuenta:{" "}
                            {item.originAccount[0].accountNumber}
                          </Text>
                          <Text>Extracción realizada</Text>
                        </View>
                        <View>
                          <Button
                            buttonStyle={{
                              marginRight: 25,
                              backgroundColor: "#629bcaa6",
                            }}
                            title="Ver transacción"
                            onPress={() =>
                              navigation.navigate("SingleAgentTransaction", {
                                item,
                              })
                            }
                          />
                        </View>
                      </View>
                      <View style={style.hr} />
                    </View>
                  );
                }}
              ></FlatList>

              <Button
                title="Ver todas las operaciones"
                onPress={() =>
                  navigation.navigate("AllAgentTransactions", {
                    agentTransactions,
                  })
                }
              />
            </Animatable.View>
          ) : (
            <Text>No hay transacciones todavia</Text>
          )}
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
