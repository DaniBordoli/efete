import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable'
import { style } from "./style.js";
import { Load } from "../../Common/loading";
import { Button } from "react-native-elements";

export default ({ userTransactions, navigation, loading, userRole, time }) => {
  
 
  return (
    <View style={{ flex: 1, backgroundColor: "#F1F3F6" }}>
      {loading ? (
        <View style={{ flex: 1 ,alignItems:'center' }}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={style.agente}
              activeOpacity={0.5}
              onPress={() => navigation.navigate("SelectAmount")}
            >
              <Image
                source={require("../../../assets/iconos/extraccion.png")}
                style={style.imageIconStyle}
              />
              <Text style={style.text}>Extracciones</Text>
            </TouchableOpacity>

            {userRole === "agent" ? (
              <TouchableOpacity
                style={style.agente}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("Agent")}
              >
                <Image
                  source={require("../../../assets/iconos/agente.png")}
                  style={style.imageIconStyle}
                />
                <Text style={style.text}>Perfil Agente</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={style.agente}
                activeOpacity={0.5}
                onPress={() => navigation.navigate("CreateAgentForm")}
              >
                <Image
                  source={require("../../../assets/iconos/agente.png")}
                  style={style.imageIconStyle}
                />
                <Text style={style.text}>Convertirte en agente</Text>
              </TouchableOpacity>
            )}

            {/* <Button
            title="ver todas las operaciones"
            onPress={() =>
              navigation.navigate("AllUserTransactions", {
                userTransactions,
              })
            }
          />
          <Button
          title='Mis cuentas'
          onPress={()=> navigation.navigate('Accounts')}
          /> */}
          </View>

          <Animatable.View 
          animation="fadeInUpBig"
          
          style={style.movimientosContainer}>
            <Text style={style.movimientos}>Movimientos</Text>
            <Text style={style.time}>{time.toUpperCase()}</Text>

            <View style={style.hr} />

            <FlatList
            showsVerticalScrollIndicator={false}
              keyExtractor={(userTransactions) => userTransactions._id}
              data={userTransactions}
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
                        <Text>Monto: ${item.amount}</Text>
                        <Text>
                          Agente: {item.agent[0].name}
                        </Text>
                        <Text>Extracción realizada</Text>
                      </View>
                      <View>
                        <Button
                          buttonStyle={{
                            marginRight: 25,
                            backgroundColor:'#629bcaa6'
                          }}
                          title="Ver mas"
                          onPress={() =>
                            navigation.navigate("SingleUserTransaction", {
                              id: item._id,
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
          </Animatable.View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
