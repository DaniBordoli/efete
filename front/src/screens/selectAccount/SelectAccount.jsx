import React from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import Modal from 'react-native-modal';
import { style } from "./style";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Load } from "../../Common/loading";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { rojo, fondoColor } from "../../Common/constans";
export default ({
  userAccounts,
  handleAccount,
  handleSubmit,
  transactionValue,
  loading,
  selectedAccount,
  navigation,
  mode,
  agenteScanner,
  agenteMapa,
  agent,

  // handleAgentDailyAmount,
}) => {
  const val = agenteMapa != agenteScanner ? false : true;

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1 }}>
          {val ? (
            <View style={{ flex: 6 }}>
              <Text style={style.titulo}>Monto Disponible</Text>
              <Text style={style.monto}>{`$ ${transactionValue}`}</Text>
              <FlatList
                keyExtractor={(userAccounts) => userAccounts._id}
                data={userAccounts}
                renderItem={({ item }) => {
                  return (
                    <TouchableOpacity
                      style={style.contenedor}
                      onPress={() => handleAccount(item)}
                    >
                      <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 1.0, y: 1.0 }}
                        colors={["#83898E", "#B2BBC3", "#FFFFFF"]}
                        style={style.accountContainer}
                      >
                        <View style={{ flex: 1 }}>
                          <MaterialCommunityIcons
                            name="bank"
                            size={30}
                            color="white"
                            style={style.bankIcon}
                          />
                        </View>

                        <View style={{ flex: 3 }}>
                          <Text style={style.account}>
                            {item.nameEntity[0].nameEntity.length > 20
                              ? item.nameEntity[0].nameEntity.substr(0, 16) +
                                "..."
                              : item.nameEntity[0].nameEntity}
                          </Text>
                          <Text style={style.account}>
                            xxxx-xxxx-xxxx-
                            {item.accountNumber.toString().slice(18, 22)}
                          </Text>
                        </View>

                        <View style={{ flex: 1 }}>
                          <MaterialCommunityIcons
                            name="check-circle"
                            size={32}
                            color={
                              selectedAccount._id === item._id
                                ? "green"
                                : "grey"
                            }
                            style={{
                              marginLeft: 10,
                              justifyContent: "flex-end",
                              marginRight: 15,
                            }}
                          />
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
          ) : (
            <View style={{ flex: 6 , backgroundColor: fondoColor}}>
              <Modal
              isVisible={true}
              animationInTiming={2000}
              animationOutTiming={2000}
              backdropTransitionInTiming={2000}
              backdropTransitionOutTiming={2000}>
               
                <View style={style.centeredView}>
                  <View style={style.modalView}>
                    <Octicons
                      name="stop"
                      size={70}
                      color={rojo}
                      style={{ marginBottom: 20 }}
                    />
                    <Text style={style.modalText}>
                      Tu plata no está acá, te espera en:
                    </Text>
                    <Text style={style.negrita}>{agent.name}</Text>
                    <Text style={style.modalText}>Con direccion en:</Text>
                    <Text style={style.negrita}>{agent.address}</Text>
                    <TouchableHighlight
                      style={{ ...style.openButton }}
                      onPress={() => {
                        navigation.navigate("Map");
                      }}
                    >
                      <Text style={style.textStyle}>Buscar en el Mapa</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
            </View>
          )}
          {val ? (
            <View
              style={{
                flexDirection: "row-reverse",
                justifyContent: "space-evenly",
                alignContent: "center",

                flex: 1,
              }}
            >
              <Button
                disabled={!selectedAccount._id}
                buttonStyle={style.confirmar}
                titleStyle={style.tituloConfirmar}
                title="Realizar Transacción"
                onPress={() => {
                  handleSubmit();
                  /* navigation.navigate("Accounts"); */
                }}
              />
              <Button
                buttonStyle={style.cancelar}
                titleStyle={style.tituloCancelar}
                title="Agregar cuenta"
                onPress={() => navigation.navigate("AddAccounts")}
              />
            </View>
          ) : null}
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
