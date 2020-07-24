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
import { Button, Icon } from "react-native-elements";
import { style } from "./style";
import { AntDesign } from "@expo/vector-icons";
import { Load } from "../../Common/loading";

const Accounts = ({
  accountsUser,
  loading,
  handleDelete,
  navigation,
  mainAccount,
  handleMainDelete
}) => {
  console.log(mainAccount, "MAIN");
  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={style.asociadas}> CUENTA PRINCIPAL</Text>
            {mainAccount._id ? (
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={style.parentOnly}
                  onPress={() =>
                    navigation.navigate("SingleAccount", { account: mainAccount })
                  }
                >
                  <View style={style.wallet}>
                    <Image
                      source={require("../../../assets/iconos/wallet.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </View>

                  <View style={{ alignContent: "center" }}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <Text style={style.negrita}>Entidad:</Text>
                      <Text>{mainAccount.nameEntity[0].nameEntity}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={style.negrita}>Cuenta:</Text>
                      <Text>{mainAccount.accountNumber}</Text>
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
                        handleMainDelete(mainAccount._id);
                      }}
                    >
                      <AntDesign name="delete" size={24} color="grey" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={{textAlign:'center'}}> Seleccionar una cuenta principal</Text>
              </View>
            )}
          </View>
          <View style={style.hr} />

          <View style={{ flex: 2 }}>
            <Text style={style.asociadas}> CUENTAS ASOCIADAS</Text>

            <FlatList
            
              keyExtractor={(accountsUser) => accountsUser._id}
              data={accountsUser}
              renderItem={({ item, index }) => {
                return (
                  <View >
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

                        <View style={{ alignContent: "center" }}>
                          <View
                            style={{ flexDirection: "row", marginBottom: 5 }}
                          >
                            <Text style={style.negrita}>Entidad:</Text>
                            <Text>{item.nameEntity[0].nameEntity}</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={style.negrita}>Cuenta:</Text>
                            <Text>{item.accountNumber}</Text>
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
                            <AntDesign name="delete" size={24} color="grey" />
                          </TouchableOpacity>
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
