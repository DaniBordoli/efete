import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";
import { headerColor } from "../../Common/constans";
export default ({ agentTransactions, navigation, loading, time }) => {
  console.log(agentTransactions, "AGENTTRANSACTIONS");
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {loading ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("User")}
            >
              <Image
                source={require("../../../assets/iconos/usuario.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Perfil Usuario</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("QRgenerator")}
            >
              <Image
                source={require("../../../assets/iconos/QR.png")}
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
                source={require("../../../assets/iconos/negocio.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Tu Negocio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("ConfAmountAgent")}
            >
              <Image
                source={require("../../../assets/iconos/calculadora.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Modificar monto</Text>
            </TouchableOpacity>
          </View>

          {agentTransactions[0] ? (
            <Animatable.View
              animation="fadeInUpBig"
              style={style.movimientosContainer}
            >
              <Text style={style.movimientos}>Movimientos</Text>
              <Text style={style.time}>{time.toUpperCase()}</Text>
              <View style={style.hr} />
              <View
                style={{
                  height: 50,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      marginLeft: 17,
                      textTransform: "none",
                      fontFamily: "nunito",
                      color: "#949af0",
                      fontSize: 19,
                    }}
                  >
                    Monto restante:&nbsp;
                  </Text>
                  <Text style={{ fontSize: 17, alignSelf: "center" }}>
                    ${agentTransactions[0].agent[0].dailyAmount}
                  </Text>
                </View>
                <View>
                  <Button
                    buttonStyle={{
                      backgroundColor: "white",
                      borderWidth: 1,
                      borderColor: "#6f76e4",
                      marginRight: 25,
                      width: 90,
                    }}
                    titleStyle={{ color: "#6f76e4" }}
                    title="Ver todo"
                    onPress={() =>
                      navigation.navigate("AllAgentTransactions", {
                        agentTransactions,
                      })
                    }
                  />
                </View>
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
                          <Text>
                            Banco:{" "}
                            {item.originAccount[0].nameEntity[0].nameEntity}
                          </Text>
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
                              width: 90,
                            }}
                            title="Ver mas"
                            onPress={() =>
                              navigation.navigate("SingleAgentTransaction", {
                                item,
                              })
                            }
                          />
                        </View>
                        <View style={style.hr} />
                      </View>
                      <View style={style.hr} />
                    </View>
                  );
                }}
              ></FlatList>
            </Animatable.View>
          ) : (
            <Text>No hay operaciones todavia</Text>
          )}
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
