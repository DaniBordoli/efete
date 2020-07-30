import React from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";

const AllAgents = ({
    agentsUser,
    loading,
    navigation,
    handleDelete
}) => {
    console.log("AQUI",agentsUser)
    return (
        <View style={{ flex: 1 }}>
          {loading ? (
            <View style={{ flex: 1 }}>
              
              <View style={style.hr} />
    
                <View style={{ flex: 2 }}>
                <Text style={style.asociadas}>NEGOCIOS</Text>
    
                <FlatList
                    style={{ marginBottom:10 }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(agentsUser) => agentsUser._id}
                        data={agentsUser}
                        renderItem={({ item }) => {
                    return (
                      <View >
                        
                          <TouchableOpacity
                            style={style.parent}
                            onPress={() =>
                              navigation.navigate("Agent", {
                                agent: item,
                              })
                            }
                          >
                            <View style={style.wallet}>
                              <Image
                                source={require("../../../assets/iconos/negocio.png")}
                                style={{ width: 50, height: 50 }}
                              />
                            </View>
    
                            <View style={{ alignContent: "center" }}>
                              <View
                                style={{ flexDirection: "row", marginBottom: 5 }}
                              >
                                <Text style={style.negrita}>Nombre:</Text>
                                <Text style={style.tex}>{item.name} </Text>
                              </View>
                              <View style={{ flexDirection: "row" }}>
                                <Text style={style.negrita}>Dirección:</Text>
                                <Text>{item.address.substr(0,18)} ...</Text>
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
                                  handleDelete(item._id);
                                }}
                              >
                                <AntDesign name="delete" size={25} color="#454141" />
                              </TouchableOpacity>
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
        </View>
      );

}

export default AllAgents