import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";
import { fondoColor } from "../../Common/constans";
const AllAgents = ({ agentsUser, loading, navigation, handleDelete, mode }) => {
  return (
    <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
      {loading ? (
        <View style={{ flex: 1, backgroundColor: mode ? fondoColor : "black" }}>
          <View style={{ flex: 2 }}>
            <Text style={style.asociadas}>NEGOCIOS</Text>
            <FlatList
              style={{ marginBottom: 10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(agentsUser) => agentsUser._id}
              data={agentsUser}
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity
                      style={mode ? style.parent : style.parentDark}
                      onPress={() =>
                        navigation.navigate("Agent", {
                          agent: item,
                        })
                      }
                    >
                      <View style={style.negocio}>
                        <Image
                          source={
                            mode
                              ? require("../../../assets/iconos/negocio.png")
                              : require("../../../assets/iconos/negocios.png")
                          }
                          style={{ width: 50, height: 50 }}
                        />
                      </View>
                      <View style={{ alignContent: "center" }}>
                        <View style={{ flexDirection: "row", marginBottom: 5 }}>
                          <Text
                            style={mode ? style.negrita : style.negritaDark}
                          >
                            Nombre:
                          </Text>
                          <Text style={mode ? style.tex : style.texDark}>
                            {item.name.length > 18
                              ? `${item.name.substr(0, 16)}...`
                              : item.name}
                          </Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                          <Text
                            style={mode ? style.negrita : style.negritaDark}
                          >
                            Dirección:
                          </Text>
                          <Text style={mode ? style.tex : style.texDark}>
                            {item.address.substr(0, 16)}...
                          </Text>
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
                          <AntDesign
                            name="delete"
                            size={25}
                            color={mode ? "#454141" : "white"}
                          />
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
      <Button
        buttonStyle={style.botonAgregar}
        titleStyle={style.tituloAgregar}
        title="AGREGAR NEGOCIO"
        onPress={() => navigation.navigate("CreateAgentForm")}
      />
    </View>
  );
};
export default AllAgents;
