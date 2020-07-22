import React from "react";
import { View, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { style } from "./style.js";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/FontAwesome";

const AddAccount = ({
  banks,
  handleAccountNumber,
  handleCbu,
  handleSubmit,
  navigation,
  handleBank,
}) => {
  return (
    <View style={{ flex: 8 }}>
      <DropDownPicker
        style={style.dropdown}
        items={banks.map((item) => ({
          label: `${item.nameEntity}`,
          value: item._id,
        }))}
        defaultIndex={0}
        containerStyle={{ height: 40 }}
        onChangeItem={(item) => handleBank(item.value)}
      />

      <Text style={style.text}>CBU / CVU</Text>
      <TextInput
        style={style.input}
        placeholder="Ingrese su CBU / CVU"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(cbu) => handleCbu(cbu)}
      />
      {/* {account.length < 16 ? <Text>La cuenta debe contener al menos 16 numeros</Text> : null} */}

      <Text style={style.text}>Número de Cuenta</Text>
      <TextInput
        style={style.input}
        placeholder="Ingrese su número de cuenta"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(accountNumber) => handleAccountNumber(accountNumber)}
      />
      {/* {account.length < 22 ? <Text>La cuenta debe contener al menos 22 numeros</Text> : null} */}
      <View
        style={{ flex: 8 }}
        style={{
          flexDirection: "row-reverse",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Button
          buttonStyle={style.botonIniciar}
          titleStyle={style.tituloIniciar}
          title="Confirmar"
          onPress={() => {
            handleSubmit();
            navigation.navigate("Accounts");
          }}
        />
      </View>
    </View>
  );
};

export default AddAccount;
