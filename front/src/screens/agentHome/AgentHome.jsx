import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { style } from "./style";
import * as Animatable from "react-native-animatable";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";
import { MaterialIcons } from '@expo/vector-icons'; 

import { lilaDark, verdeDark, buttonDark, textButtonDark, headerColorDark } from "../../Common/constans.js";
export default ({ agentTransactions, navigation, loading, time, agent,mode }) => {
  console.log("AGENT", agent)
  return (
    <View style={{ flex: 1,  backgroundColor:mode?'#F1F3F6' : 'black'  }}>
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
              style={mode ? style.agente : style.agenteDark}
              activeOpacity={0.5}
              onPress={() => {navigation.navigate("User")}}
            >
              <Image
                source={ mode ? require("../../../assets/iconos/usuario.png") : 
                require("../../../assets/iconos/userDark.png")}
                style={style.imageIconStyle}
              />
              <Text style={mode? style.text  : style.textDark}>Perfil Usuario</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
              activeOpacity={0.5}
              onPress={() =>{ navigation.navigate("QRgenerator")}}
            >
              <Image
                source={ mode ? require("../../../assets/iconos/QR.png") :
                require("../../../assets/iconos/QRDark.png")}
                style={style.imageIconStyle}
              />
              <Text style={mode? style.text  : style.textDark}>Cobrar con Qr</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
              activeOpacity={0.5}
              onPress={() => {navigation.navigate("EditAgentProfile")}}
            >
              <Image
                source={ mode ? require("../../../assets/iconos/negocio.png"):
                require("../../../assets/iconos/negocioDark.png")
              }
                style={style.imageIconStyle}
              />
              <Text style={mode? style.text  : style.textDark}>Tu Negocio</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
              activeOpacity={0.5}
              onPress={() => { navigation.navigate("ConfAmountAgent") }}
            >
              <Image
                source={mode ? require("../../../assets/iconos/calculadora.png"):
                require("../../../assets/iconos/costosDark.png")
              }
                style={style.imageIconStyle}
              />
              <Text style={mode? style.text  : style.textDark}>Modificar monto</Text>
            </TouchableOpacity>
          </View>

          <Animatable.View
            animation="fadeInUpBig"
            style={mode? style.movimientosContainer : style.movimientosContainerDark}
          >
            <Text style={ mode ? style.movimientos : style.movimientosDark}>Movimientos</Text>
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
                    color: mode ? "#949af0" : lilaDark,
                    fontSize: 19,
                  }}
                >
                  Monto restante:&nbsp;
                </Text>
                <Text style={{ fontSize: 17, alignSelf: "center", color:mode? 'black' : 'white' }}>
                  ${agent.dailyAmount}
                </Text>
              </View>
              <View>
                {agentTransactions[0] ? (
                  <Button
                    buttonStyle={{
                      backgroundColor: mode ? "white" : headerColorDark,
                      borderWidth: 1,
                      borderColor: mode? "#6f76e4" : lilaDark,
                      marginRight: 25,
                      width: 90,
                    }}
                    titleStyle={{ color: mode? "#6f76e4" : lilaDark}}
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
                        style={ mode? style.single : style.singleDark}
                        onPress={() =>
                          navigation.navigate("SingleAgentTransaction", {
                            item,
                          })
                        }
                      >
                      


                        <View style={style.contenido}>
                        <Text style={ mode ? style.textoContenido : style.textoContenidoDark}>
                            Banco:{item.originAccount[0].nameEntity[0].nameEntity}
                          </Text>
                          <Text style={ mode ? style.textoContenido : style.textoContenidoDark}>
                            Cuenta:{item.originAccount[0].accountNumber}
                          </Text>

                        <Text style={ mode ? style.textoContenido : style.textoContenidoDark}>Agente: {item.agent[0].name}</Text>
                        <Text style={{fontFamily:'regular',fontSize:13,color:mode? '#94AFB6' : verdeDark}}>Extracción realizada</Text>
                      </View>
                        


                        <View style={style.monto}>
                      <Text style={mode ? style.montoTexto : style.montoTextoDark}>${item.amount}</Text>
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
