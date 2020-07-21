import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { style } from "../register/style";

const Accounts = ({ accountsUser, loading, handleDelete, navigation }) => {
  console.log("cuentas",accountsUser)
  return (
    <View>
      {loading ? (
        <View>
          <Text style={style.registrarse}> CUENTAS ASOCIADAS</Text>

          <FlatList
            keyExtractor={(accountsUser) => accountsUser._id}
            data={accountsUser}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text
                    onPress={() =>
                      navigation.navigate("SingleAccount", { account: item })
                    }
                  >
                    <Text>Entidad: {item.nameEntity[0].nameEntity}</Text>

                    <Text>Cuenta: {item.accountNumber}</Text>
                  </Text>
                  <Button
                    title="ELIMINAR CUENTA"
                    onPress={() => {
                      console.log("item", item._id);
                      handleDelete(item._id);
                    }}
                  />

                </View>
              );
            }}
          />
           <Button
                    title="AGREGAR CUENTA"
                    onPress={() => {
                  
                      navigation.navigate("AddAccounts")
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

const styles = StyleSheet.create({});

export default Accounts;
