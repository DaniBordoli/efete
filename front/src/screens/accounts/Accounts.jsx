import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";
import Modal from "react-native-modal";
import { rojo, buttonColor } from "../../Common/constans";


const Accounts = ({
  accountsUser,
  loading,
  handleDelete,
  navigation,
  mainAccount,
  handleMainDelete,
  mode
}) => {
  console.log(mainAccount, "MAIN");
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={style.asociadas}> CUENTA PRINCIPAL</Text>
            {mainAccount._id ? (
              <View style={{  height:120}}>
                <TouchableOpacity
                  style={style.parentOnly}
                  onPress={() =>
                    navigation.navigate("SingleAccount", {
                      account: mainAccount,
                    })
                  }
                >
                  <View style={style.wallet}>
                    <Image
                      source={require("../../../assets/iconos/wallet.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>

                  <View style={{ alignContent: "center" , flex:6 }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <Text style={style.negrita}>Entidad:</Text>
                      <Text style={style.tex}>{mainAccount.nameEntity[0].nameEntity.length > 20 ? `${mainAccount.nameEntity[0].nameEntity.substr(0,18)}...` : mainAccount.nameEntity[0].nameEntity}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={style.negrita}>Cuenta:</Text>
                      <Text style={style.tex}> {mainAccount.accountNumber.substr(0,16)}...</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-end"
                      
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setModal2Visible(true);
                      }}
                    >
                      <AntDesign name="delete" size={25} color="#454141" />
                    </TouchableOpacity>

                    <View style={style.centeredView}>
                      <Modal
                        isVisible={modal2Visible}
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
                                handleMainDelete(item._id);
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
                                setModal2Visible(!modal2Visible);
                              }}
                            >
                              <Text style={{ ...style.textStyle , color:buttonColor }}>
                                Cancelar
                              </Text>
                            </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={{ textAlign: "center" }}>
                
                  Seleccionar una cuenta principal
                </Text>
              </View>
            )}
          </View>
          <View style={style.hr} />

          <View style={{ flex: 2 }}>
            <Text style={style.asociadas}> CUENTAS ASOCIADAS</Text>

            <FlatList
              style={{ marginBottom: 10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(accountsUser) => accountsUser._id}
              data={accountsUser}
              renderItem={({ item }) => {
                return (
                  <View>
                    {!item.mainAccount ? (
                      <TouchableOpacity
                        style={style.parent}
                        onPress={() =>
                          navigation.navigate("SingleAccount", {
                            account: item,
                          })
                        }
                      >
                        <View style={style.wallet}>
                          <Image
                            source={require("../../../assets/iconos/wallet.png")}
                            style={{ width: 50, height: 50 }}
                          />
                        </View>

                        <View style={{ alignContent: "center" , flex:6 }}>
                          <View
                            style={{
                              flexDirection: "row",
                              marginBottom: 5,
                              marginRight: -10,
                            }}
                          >
                            <Text style={style.negrita}>Entidad:</Text>
                            <Text style={style.tex}>{item.nameEntity[0].nameEntity.length > 20 ? `${item.nameEntity[0].nameEntity.substr(0,18)}...` : item.nameEntity[0].nameEntity }</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={style.negrita}>Cuenta:</Text>
                            <Text style={style.tex}>{item.accountNumber.toLocaleString().substr(0,16)}...</Text>
                          </View>
                        </View>

                        <View
                          style={{
                            
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "flex-end"
                          
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              setModalVisible(true);
                            }}
                          >
                            <AntDesign
                              name="delete"
                              size={25}
                              color="#454141"
                            />
                          </TouchableOpacity>

                          <View style={style.centeredView}>
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
                                    Seguro desea ELIMINAR la cuenta?
                                  </Text>
                                  <View style={{flexDirection:"row-reverse"}}>

                                  <TouchableHighlight
                                    style={{
                                      ...style.openButton,
                                      backgroundColor: rojo,
                                    }}
                                    onPress={() => {
                                      handleDelete(item._id);
                                    }}
                                  >
                                    <Text style={style.textStyle}>
                                      Confirmar
                                    </Text>
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
                                    <Text style={{ ...style.textStyle , color:buttonColor}}>
                                      Cancelar
                                    </Text>
                                  </TouchableHighlight>
                                </View>
                                </View>

                              </View>
                            </Modal>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                );
              }}
            />
            <Button
              buttonStyle={style.botonAgregar}
              titleStyle={style.tituloAgregar}
              title="AGREGAR CUENTA"
              onPress={() => {
                navigation.navigate("AddAccounts");
              }}
            />
          </View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};

export default Accounts;
