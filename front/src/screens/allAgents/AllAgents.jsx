import React, {useState} from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    Modal,
    TouchableHighlight
} from "react-native";
import { Button } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";
import { fondoColor } from "../../Common/constans";



const AllAgents = ({
    agentsUser,
    loading,
    navigation,
    handleDelete,
    mode,
  

}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1 , backgroundColor:mode? fondoColor : "black"}}>
          {loading ? (
            <View style={{ flex: 1, backgroundColor:mode? fondoColor : "black" }}>
                <View style={{ flex: 2 }}>
                <Text style={style.asociadas}>NEGOCIOS</Text>
                <FlatList
                    style={{ marginBottom:10 }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(agentsUser) => agentsUser._id}
                        data={agentsUser}
                        renderItem={({ item }) => {
                    return (
                        <View>
                          <TouchableOpacity
                            style={ mode ? style.parent : style.parentDark}
                            onPress={() =>
                              navigation.navigate("Agent", {
                                agent: item,
                              })
                            }
                          >
                            <View style={style.negocio}>
                              <Image
                                source={mode ? require("../../../assets/iconos/negocio.png") : require("../../../assets/iconos/negocios.png") }
                                style={{ width: 50, height: 50 }}
                              />
                            </View>
    
                            <View style={{ alignContent: "center" }}>
                              <View
                                style={{ flexDirection: "row", marginBottom: 5 }}
                              >
                                <Text style={mode? style.negrita : style.negritaDark}>Nombre:</Text>
                                <Text style={ mode ? style.tex : style.texDark}>{item.name} </Text>
                              </View>
                              <View style={{ flexDirection: "row" }}>
                                <Text style={mode? style.negrita : style.negritaDark}>Dirección:</Text>
                                <Text style={ mode ? style.tex : style.texDark} >{item.address.substr(0,18)} ...</Text>
                              </View>
                            </View>
    
                            <View
                              style={{
                                marginRight: 15,
                                flex: 1,
                                flexDirection: "row",
                                justifyContent: "flex-end",
                              }}
                            >
                              <TouchableOpacity
                                onPress={() => {
                                  setModalVisible(true);
                                }}
                              >
                                <AntDesign name="delete" size={25} color={mode? "#454141" : 'white'} />
                              </TouchableOpacity>
                            
                              <View style={style.centeredView}>
                                    <Modal
                                      animationType="slide"
                                      transparent={true}
                                      visible={modalVisible}
                                      onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                      }}
                                    >
                                      <View style={style.centeredView}>
                                        <View style={style.modalView}>
                                          <Text style={style.modalText}>Seguro desea ELIMINAR su negocio?</Text>

                                          <TouchableHighlight
                                            style={{ ...style.openButton, backgroundColor: "#00CC96" }}
                                            onPress={() => {
                                              handleDelete(item._id);
                                            }}
                                          >
                                            <Text style={style.textStyle}>Confirmar</Text>
                                          </TouchableHighlight>
                                          <TouchableHighlight
                                            style={{ ...style.openButton, backgroundColor: "#DD1919",marginTop:10 }}
                                            onPress={() => {
                                              setModalVisible(!modalVisible);
                                            }}
                                          >
                                            <Text style={{...style.textStyle}}>Cancelar</Text>
                                          </TouchableHighlight>
                                        </View>
                                      </View>
                                    </Modal>
                            </View>
                            </View>
                          </TouchableOpacity>
                      </View>
                    );
                  }}
                />
                
              </View>
            </View>
                ) : (
                  <Load />
                )}
                <Button
                    buttonStyle={style.botonAgregar}
                    titleStyle={style.tituloAgregar}
                    title="AGREGAR NEGOCIO"
                    onPress={() =>
                      navigation.navigate("CreateAgentForm")
                    }
                  />
            </View>
      );
}

export default AllAgents