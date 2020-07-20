import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";

const Accounts = ({ account, navigation, handleDelete, loading }) => {
  return (
    <View>
      {loading ? (
        <View>
          {account._id ? (
            <View>
              <Text>{account.nameEntity}</Text>
              <Text>{account.accountNumber}</Text>
              <Button
                //   style={style.button}
                title="Eliminar Cuenta"
                onPress={() => handleDelete(account._id)}
              />
            </View>
          ) : null}
          <Button
            //   style={style.button}
            title="Volver a mis cuentas"
            onPress={() => navigation.navigate("Accounts")}
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
