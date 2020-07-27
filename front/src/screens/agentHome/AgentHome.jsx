import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";
import { MaterialIcons } from '@expo/vector-icons'; 

import { headerColor } from "../../Common/constans";
export default ({ agentTransactions, navigation, loading, time, agent,mode }) => {
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
                  ${agent.dailyAmount}
                </Text>
              </View>
              <View>
                {agentTransactions[0] ? (
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
                ) : null}
              </View>
            </View>
            <View style={style.hr} />
            {agentTransactions[0] ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(agentTransactions) => agentTransactions._id}
                data={agentTransactions}
                renderItem={({ item }) => {
                  return (
                    <View style={{ height: 100, alignSelf:'center', width:'90%', marginTop:17}}>

                      <TouchableOpacity
                        style={style.single}
                        onPress={() =>
                          navigation.navigate("SingleAgentTransaction", {
                            item,
                          })
                        }
                      >
                      


                        <View style={style.contenido}>
                        <Text style={style.textoContenido}>
                            Banco:{item.originAccount[0].nameEntity[0].nameEntity}
                          </Text>
                          <Text style={style.textoContenido}>
                            Cuenta:{item.originAccount[0].accountNumber}
                          </Text>

                        <Text style={style.textoContenido}>Agente: {item.agent[0].name}</Text>
                        <Text style={{fontFamily:'regular',fontSize:13, color:'#94AFB6'}}>Extracción realizada</Text>
                      </View>
                        


                        <View style={style.monto}>
                      <Text style={style.montoTexto}>${item.amount}</Text>
                      </View>


                        <View style={style.entrar}>
                      <MaterialIcons name="keyboard-arrow-right" size={40} color="#94AFB6"/>
                      </View>

                        
                      </TouchableOpacity>
        {/* <View style={style.hr} />*/}                    
                      </View>
                  )
                }}
              ></FlatList>
            ) : (
              <Text style={{ textAlign: "center" }}>
                No hay operaciones todavia
              </Text>
            )}
          </Animatable.View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
