import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { Load } from "../../Common/loading";
import { style } from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";

const Accounts = ({ account, handleDelete, loading, handleMainAccount }) => {
  return (
    <View>
      {loading ? (
        <View>
          {account._id ? (
            <View>
              <View style={style.accountContainer}>
                <View>
                  <Text style={style.titulo}>Entidad</Text>
                  <Text style={style.texto}>
                    {account.nameEntity[0].nameEntity}
                  </Text>
                </View>
                <View>
                  <Text style={style.titulo}>Número de Cuenta</Text>
                  <Text style={style.texto}>
                    xx-xxxx-xxxx-xxxx-xxxx-
                    {account.accountNumber.toString().slice(5)}
                  </Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleMainAccount(account._id)}>
                <Text style={style.mainAccount}>
                  ESTABLECER COMO CUENTA PREDETERMINADA
                </Text>
              </TouchableOpacity>
              <Button
                buttonStyle={style.confirmar}
                titleStyle={style.tituloConfirmar}
                title="Eliminar Cuenta"
                onPress={() => handleDelete(account._id)}
              />
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
