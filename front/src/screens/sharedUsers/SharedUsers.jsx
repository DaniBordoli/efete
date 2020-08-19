import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";
import {
  fondoColor,
  buttonColor,
  verdeConfirmar,
  rojo,
} from "../../Common/constans";
import Modal from "react-native-modal";

const SharedUsers = ({
  navigation,
  sharedUsers,
  loading,
  handleDelete,
  mode,
  handleEdit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <View style={{ backgroundColor: mode ? fondoColor : "black" }}>
      {loading ? (
        <View style={{ backgroundColor: mode ? fondoColor : "black" }}>
          <View>
            <Text style={style.asociadas}>USUARIOS</Text>
            <FlatList
              style={{ marginBottom: 10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(sharedUsers) => sharedUsers._id}
              data={sharedUsers}
              renderItem={({ item }) => {
                return (
                  <View style={style.sharedUserContainer}>
                    <View style={{ alignContent: "center" }}>
                      <View style={{ flexDirection: "row", marginBottom: 5 }}>
                        <Text style={mode ? style.negrita : style.negritaDark}>
                          Nombre:
                        </Text>
                        <Text style={mode ? style.text : style.textDark}>
                          {item.username}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={mode ? style.negrita : style.negritaDark}>
                          Acceso:
                        </Text>
                        <Text style={mode ? style.text : style.textDark}>
                          {item.access === "owner" ? "Dueño" : "Empleado"}
                        </Text>
                      </View>
                    </View>

                    <View style={style.iconsContainer}>
                      <TouchableOpacity
                        onPress={() => {
                          setModalVisible(true);
                        }}
                        style={style.icon}
                      >
                        <AntDesign
                          name="delete"
                          size={32}
                          color={mode ? "#454141" : "white"}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setModal2Visible(true);
                        }}
                        style={style.icon}
                      >
                        <AntDesign
                          name="edit"
                          size={32}
                          color={mode ? "#454141" : "white"}
                        />
                      </TouchableOpacity>
                    </View>

                    <View style={style.centeredView}>
                      <Modal
                        isVisible={modalVisible}
                        animationInTiming={700}
                        animationOutTiming={900}
                        backdropTransitionInTiming={2000}
                        backdropTransitionOutTiming={2000}
                      >
                        <View style={style.centeredView}>
                          <View style={style.modalView}>
                            <Text style={style.modalText}>
                              Seguro desea remover el acceso a su negocio?
                            </Text>
                            <View style={{ flexDirection: "row-reverse" }}>
                              <TouchableHighlight
                                style={{
                                  ...style.openButton,
                                  backgroundColor: rojo,
                                }}
                                onPress={() => {
                                  handleDelete(item.username);
                                  setModalVisible(false);
                                }}
                              >
                                <Text style={style.textStyle}>Confirmar</Text>
                              </TouchableHighlight>
                              <TouchableHighlight
                                style={{
                                  ...style.openButton,
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: buttonColor,
                                }}
                                onPress={() => {
                                  setModalVisible(!modalVisible);
                                }}
                              >
                                <Text
                                  style={{
                                    ...style.textStyle,
                                    color: buttonColor,
                                  }}
                                >
                                  Cancelar
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                      <Modal
                        isVisible={modal2Visible}
                        animationInTiming={700}
                        animationOutTiming={900}
                        backdropTransitionInTiming={2000}
                        backdropTransitionOutTiming={2000}
                      >
                        <View style={style.centeredView}>
                          <View style={style.modalView}>
                            <Text style={style.modalText}>
                              Deseas darle acceso de{" "}
                              {item.access === "owner" ? "Empleado" : "Dueño"} a{" "}
                              {item.username}?
                            </Text>
                            <View style={{ flexDirection: "row-reverse" }}>
                              <TouchableHighlight
                                style={{
                                  ...style.openButton,
                                  backgroundColor: verdeConfirmar,
                                }}
                                onPress={() => {
                                  handleEdit(item.username, item.access);
                                  setModal2Visible(false);
                                }}
                              >
                                <Text style={style.textStyle}>Confirmar</Text>
                              </TouchableHighlight>
                              <TouchableHighlight
                                style={{
                                  ...style.openButton,
                                  backgroundColor: "white",
                                  borderWidth: 1,
                                  borderColor: buttonColor,
                                }}
                                onPress={() => {
                                  setModal2Visible(false);
                                }}
                              >
                                <Text
                                  style={{
                                    ...style.textStyle,
                                    color: buttonColor,
                                  }}
                                >
                                  Cancelar
                                </Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <TouchableOpacity style={style.buttonShare}>
              <Text style={style.textButtonShare}>COMPARTIR COMERCIO</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Load />
      )}
    </View>
  );
};
export default SharedUsers;
