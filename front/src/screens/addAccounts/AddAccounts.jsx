import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { style } from "./style.js";
import { Button } from "react-native-elements";
import { Alert } from "react-native";

const AddAccount = ({
  banks,
  handleAccountNumber,
  handleCbu,
  handleSubmit,
  navigation,
  handleBank,
  isValid,
  accountNumber,
  mode,
  message
}) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
      <View style={{ flex: 7 }}>
        <Text style={style.textoo}>Agregar cuenta</Text>

        <DropDownPicker
          labelStyle={{ fontSize: 14, color: "#6F76E4" }}
          items={banks.map((item) => ({
            label: `${item.nameEntity}`,
            value: item._id,
          }))}
          defaultIndex={1}
          placeholder="Seleccione su Entidad Bancaria"
          containerStyle={style.dropdown}
          onChangeItem={(item) => handleBank(item.value)}
        />

        <DropDownPicker
          labelStyle={{ fontSize: 14, color: "#6F76E4" }}
          items={[
            { label: "CBU", value: "CBU" },
            { label: "CVU", value: "CVU" },
            { label: "Selecciona tipo de cuenta", value: "", selected: true },
          ]}
          defaultIndex={0}
          containerStyle={style.dropdown}
          onChangeItem={(item) => handleCbu(item.value)}
        />

        <Text style={style.text}>NUMERO DE CUENTA</Text>
        <View style={style.input2}>
          <TextInput
            style={{ height: 50 }}
            maxLength={22}
            keyboardType="numeric"
            style={{ marginLeft: 7 }}
            placeholder="Ingresar cuenta de 22 digitos"
            autoCapitalize="none"
            autoCorrect={false}
            value={accountNumber}
            onChangeText={(accountNumber) => handleAccountNumber(accountNumber)}
          />
          {isValid ? (
            <MaterialCommunityIcons
              name="check-circle"
              size={32}
              color="green"
              style={{
                marginLeft: "43%",
                alignSelf: "center",
              }}
            />
          ) : null}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row-reverse",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {message.length>0? Alert.alert(message):null}
        <Button
          disabled={!isValid}
          buttonStyle={style.botonConfirmar}
          titleStyle={style.tituloConfirmar}
          title="Confirmar"
          onPress={() => {
            handleSubmit()
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddAccount;
