import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Button } from "react-native-elements";
import { Load } from "../../Common/loading";
import { style } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { buttonColor, rojo } from "../../Common/constans";

const Accounts = ({ account, handleDelete, loading, handleMainAccount }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1 }}>
          {account._id ? (
            <View style={{ flex: 1 }}>
              <View style={{ flex: 2 }}>
                <View style={style.accountContainer}>
                  <View style={{ width: "100%", alignItems: "center" }}>
                    <Text style={style.titulo}>Entidad</Text>
                    <View style={style.textoContainer}>
                      <Text style={style.texto}>
                        {account.nameEntity[0].nameEntity.toUpperCase()}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      alignItems: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Text style={style.titulo}>Número de Cuenta</Text>
                    <View style={style.textoContainer}>
                      <Text style={style.texto}>
                        xx-xxxx-xxxx-xxxx-xxxx-
                        {account.accountNumber.toString().slice(18, 22)}
                      </Text>
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => handleMainAccount(account._id)}
                >
                  <Text style={style.mainAccount}>
                    ESTABLECER COMO PREDETERMINADA
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  marginBottom:'10%'
                }}
              >
                <Button
                  buttonStyle={style.confirmar}
                  titleStyle={style.tituloConfirmar}
                  title="Eliminar Cuenta"
                  onPress={() => {
                    setModalVisible(true);
                  }}
                />
                <Modal
                  isVisible={modalVisible}
                  animationInTiming={800}
                  animationOutTiming={1000}
                  backdropTransitionInTiming={2000}
                  backdropTransitionOutTiming={2000}
                >
                  <View style={style.centeredView}>
                    <View style={style.modalView}>
                      <Text style={style.modalText}>
                        Seguro desea ELIMINAR su negocio?
                      </Text>
                      <View style={{flexDirection:"row-reverse"}}>
                      <TouchableHighlight
                        style={{
                          ...style.openButton,
                          backgroundColor: rojo,
                        }}
                        onPress={() => {
                          handleDelete(account._id);
                        }}
                      >
                        <Text style={style.textStyle}>Confirmar</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        style={{
                          ...style.openButton,
                          backgroundColor: 'white',
                          borderWidth: 1,
                          borderColor:buttonColor
                        }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={{ ...style.textStyle, color:buttonColor }}>Cancelar</Text>
                      </TouchableHighlight>
                      </View>
                      


                    </View>
                  </View>
                </Modal>
              </View>
             
            </View>
          ) : null}
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Accounts;
