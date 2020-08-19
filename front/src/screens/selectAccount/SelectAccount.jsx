import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Linking,
} from "react-native";
import Modal from "react-native-modal";
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
  agenteScanner,
  agenteMapa,
  agent,
  modalVisible,
  handleModal,
  agenteUbicacion,

  // handleAgentDailyAmount,
}) => {
  return (
    <View>
      {loading ? (
        <View>
          {agenteMapa._id != agenteScanner &&
          agent.dailyAmount < transactionValue ? (
            //Si el qr escaneado es distinto al Qr elegido en el mapa y no hay plata en el local

            <View>
              <Modal
                isVisible={modalVisible}
                animationInTiming={500}
                animationOutTiming={500}
                backdropTransitionInTiming={500}
                backdropTransitionOutTiming={500}
              >
                <View style={style.centeredView}>
                  <View style={style.modalView}>
                    <Octicons
                      name="stop"
                      size={70}
                      color={rojo}
                      style={{ marginBottom: 20 }}
                    />
                    <Text style={style.modalText}>
                      Este no es el local que elegiste.
                    </Text>

                    <View>
                      <Text style={style.modalText}>
                        No hay plata disponible en este local
                      </Text>

                      <TouchableHighlight
                        style={{ ...style.openButton }}
                        onPress={() => {
                          handleModal();
                          Linking.openURL(
                            `https://www.google.com/maps/dir/?api=1&travelmode=driving&dir_action=navigate&destination=${agenteUbicacion.latitude}, ${agenteUbicacion.longitude}`
                          );
                          navigation.navigate("confirmValue", {
                            value: transactionValue,
                            item: agenteMapa,
                          });
                        }}
                      >
                        <Text style={style.textStyle}>Ir a tu local</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
          ) : (
            //Si el qr escaneado es igual al Qr elegido en el mapa o es distinto pero tiene plata disponible
            <View>
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
                        <View>
                          <MaterialCommunityIcons
                            name="bank"
                            size={30}
                            color="white"
                            style={style.bankIcon}
                          />
                        </View>

                        <View>
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

                        <View>
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

              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "space-evenly",
                  alignContent: "center",
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
            </View>
          )}
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
