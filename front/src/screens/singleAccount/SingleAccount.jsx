import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";

const Accounts = ({ account, navigation }) => {
  return (
    <View>
      <Text>{account.nameEntity}</Text>
      <Text>{account.accountNumber}</Text>
      <Button
        //   style={style.button}
        title="Eliminar Cuenta"
        onPress={() => console.log("borrar")}
      />
      <Button
        //   style={style.button}
        title="Volver a mis cuentas"
        onPress={() => navigation.navigate("Accounts")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Accounts;
