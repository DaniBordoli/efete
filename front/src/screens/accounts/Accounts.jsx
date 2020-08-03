import React from "react";
import {
  View,
  Text,
  FlatList,
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
  handleMainDelete,
  mode
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
                      style={{ width: 50, height: 50}}
                    />
                  </View>

                  <View style={{ alignContent: "center"}}>
                    <View style={{ flexDirection: "row", marginBottom: 5 }}>
                      <Text style={style.negrita}>Entidad:</Text>
                      <Text style={style.tex}>{mainAccount.nameEntity[0].nameEntity.substr(0,22)}...</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={style.negrita}>Cuenta:</Text>
                      <Text style={style.tex}> {mainAccount.accountNumber.substr(0,18)}...</Text>
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
                      <AntDesign name="delete" size={25} color="#454141" />
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
            style={{ marginBottom:10 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(accountsUser) => accountsUser._id}
              data={accountsUser}
              renderItem={({ item }) => {
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
                            style={{ flexDirection: "row", marginBottom:5, marginRight:-10
                           }}
                            >
                            <Text style={style.negrita}>Entidad:</Text>
                            <Text style={style.tex}>{item.nameEntity[0].nameEntity.length > 20 ? `${item.nameEntity[0].nameEntity.substr(0,21)}...` : item.nameEntity[0].nameEntity }</Text>
                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={style.negrita}>Cuenta:</Text>
                            <Text style={style.tex}>{item.accountNumber.toLocaleString().substr(0,18)}...</Text>
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
