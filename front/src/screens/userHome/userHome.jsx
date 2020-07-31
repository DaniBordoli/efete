import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { style } from "./style.js";
import { Load } from "../../Common/loading";
import { MaterialIcons } from '@expo/vector-icons'; 
import { Button } from "react-native-elements";
import { lilaDark, verdeDark, buttonDark, textButtonDark, headerColorDark } from "../../Common/constans.js";

export default ({
  // userTransactions,
  navigation,
  loading,
  userRole,
  time,
  userTransactions,
  mode
}) => {
  console.log("transTonto", userTransactions);
  return (
    <View style={{ flex: 1, backgroundColor:mode?'#F1F3F6' : 'black' }}>
      {loading ? (
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("SelectAmount")}
            >
              <Image
                source={mode? require("../../../assets/iconos/extraccion.png") : require("../../../assets/iconos/extraccionDark.png") }
                style={style.imageIconStyle}
              />
              <Text style={mode? style.text  : style.textDark}>Extracciones</Text>
            </TouchableOpacity>

            {userRole === "agent" ? (
              <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("AllAgents")}
              >
                <Image
                  source={ mode ? require("../../../assets/iconos/agente.png") : require("../../../assets/iconos/agenteDark.png") }
                  style={style.imageIconStyle}
                />
                <Text style={mode? style.text  : style.textDark}>Perfil Agente</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
              style={mode ? style.agente : style.agenteDark}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("CreateAgentForm")}
              >
                <Image
                  source={require("../../../assets/iconos/agente.png")}
                  style={style.imageIconStyle}
                />
                <Text style={mode? style.text  : style.textDark}>Convertirte en agente</Text>
              </TouchableOpacity>
            )}

          </View>

          <Animatable.View
            animation="fadeInUpBig"
            style={mode? style.movimientosContainer : style.movimientosContainerDark}
          >
            <Text style={ mode ? style.movimientos : style.movimientosDark}>Movimientos</Text>
            
            <Text style={style.time}>{time.toUpperCase()}</Text>
            {/* <Button>Ver Todo</Button> */}          
            
            
          <View style={{alignItems: "center"}}>
           {userTransactions[0] 
           ?
           (
           <Button
           buttonStyle={{
            backgroundColor: mode ? "white" : headerColorDark,
            borderWidth: 1,
            borderColor: mode? "#6f76e4" : lilaDark,
            width: 200,
            marginBottom: 10,
           }}
           titleStyle={{ color: mode? "#6f76e4" : lilaDark}}
           title="Ver todas las transacciones"
           onPress={() => navigation.navigate('AllUserTransactions', {userTransactions})}
           />
           ) :
           <Text>
             No hay transacciones
           </Text>
           }
           </View>

           <View style={style.hr} />
            <FlatList
              showsVerticalScrollIndicator={false}
              keyExtractor={(userTransactions) => userTransactions._id}
              data={userTransactions.slice(0, 4)}
              renderItem={({ item }) => {
                return (
                  <View style={{ height: 90, alignSelf:'center', width:'90%', marginTop:17}}>

                    <TouchableOpacity
                      style={ mode? style.single : style.singleDark}
                      onPress={() =>
                        navigation.navigate("SingleUserTransaction", {
                          id: item._id,
                        })
                      }
                    >
                      <View style={style.contenido}>
                        <Text style={{fontFamily:'lato', fontSize:16, color:mode? '#3D5E87' : lilaDark}}>Agente: {item.agent[0].name}</Text>
                        <Text style={{marginTop:3, fontFamily:'regular',fontSize:14, color:mode? '#94AFB6' : verdeDark}}>Extracción realizada</Text>
                      </View>

                      <View style={style.monto}>
                      <Text style={ mode? style.montoTexto : style.montoTextoDark}>${item.amount}</Text>
                      </View>

                      <View style={style.entrar}>
                      <MaterialIcons name="keyboard-arrow-right" size={40} color= {mode? "#94AFB6" : "#D3EBF1"}/>
                      </View>

                    </TouchableOpacity>
                    
                    {/* <View style={style.hr} /> */}
                  </View>
                )
              }}
            ></FlatList>
          </Animatable.View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
