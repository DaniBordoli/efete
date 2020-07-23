import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";

const Accounts = ({ accountsUser, loading, handleDelete, navigation }) => {
  console.log("ACOUNTUSER:", accountsUser);

  return (
    <View>
      {loading ? (
        <View>
          <Text style={style.asociadas}> CUENTA PRINCIPAL</Text>

          <TouchableOpacity style={style.container}>
            <View style={style.wallet}>
              <Image
                source={require("../../../assets/iconos/wallet.png")}
                style={{ width: 50, height: 50 }}
              />
            </View>

            <View style={style.principal}>
              <Text style={{ marginTop: 10, marginLeft: 30 }}>
                Entidad: Banco Santander
              </Text>

              <Text style={{ marginTop: 10, marginLeft: 30 }}>
                Cuenta: 123456789
              </Text>
            </View>

            <View style={style.delete}>
              <AntDesign
                name="delete"
                size={24}
                color="grey"
                style={style.delete}
              />
            </View>
          </TouchableOpacity>

          <Text style={style.asociadas}> CUENTAS ASOCIADAS</Text>

          <FlatList
            keyExtractor={(accountsUser) => accountsUser._id}
            data={accountsUser}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("SingleAccount", { account: item })
                    }
                  >
                    <View style={style.wallet}>
                      <Image
                        source={require("../../../assets/iconos/wallet.png")}
                        style={{ width: 50, height: 50 }}
                      />
                    </View>

                    <Text style={{ marginTop: 10, marginLeft: 30 }}>
                      Entidad:{item.nameEntity[0].nameEntity}
                    </Text>

                    <Text style={{ marginTop: 10, marginLeft: 30 }}>
                      Cuenta:
                      {item.accountNumber}
                    </Text>
                  </TouchableOpacity>

                  <View style={style.delete}>
                    <AntDesign
                      name="delete"
                      size={24}
                      color="grey"
                      style={style.delete}
                    />
                  </View>

                  {/* <Button
                              buttonStyle={style.botonDeterminada}
                              titleStyle={style.tituloDeterminada}
                              title="ElIMINAR CUENTA"
                              onPress={() => {
                                console.log("item", item._id);
                                handleDelete(item._id);
                              }}
                            /> */}
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
      ) : (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )}
    </View>
  );
};

export default Accounts;
