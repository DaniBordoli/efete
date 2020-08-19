import React from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { style } from "./style.js";
import { Button } from "react-native-elements";

const ShareAgents = ({
  handleSubmit,
  mode,
  handleAccess,
  handleUsername,
  validUsername,
  validAccess,
  username,
  access,
}) => {
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
        <View style={{ flex: 7 }}>
          <Text style={style.textoo}>Manejar Accesos</Text>

          <DropDownPicker
            labelStyle={{ fontSize: 14, color: "#6F76E4" }}
            items={[
              { label: "Selecciona tipo de Acceso", value: "", selected: true },
              { label: "Dueño", value: "owner" },
              { label: "Empleado", value: "employee" },
            ]}
            defaultIndex={0}
            containerStyle={style.dropdown}
            onChangeItem={(item) => handleAccess(item.value)}
          />

          <Text style={style.text}>Correo Electrónico</Text>
          <View style={style.input2}>
            <TextInput
              style={{ height: 50 }}
              maxLength={22}
              keyboardType="email-address"
              style={{ marginLeft: 7 }}
              placeholder="Ingresar correo electŕonico"
              autoCapitalize="none"
              isspecialcharacter={true}
              autoCorrect={false}
              value={username}
              onChangeText={(username) => handleUsername(username)}
            />
            {!validUsername ? (
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
        <View>
          {access === "owner" ? (
            <Text style={style.textInfo}>
              El usuario podrá editar los datos del comercio, dar acceso a otros
              usuarios y hasta eliminar el comercio
            </Text>
          ) : access === "employee" ? (
            <Text style={style.textInfo}>
              El usuario solo podrá modificar el monto diario para operar, pero
              no podrá editar los datos del comercio ni dar accesos a otros
              usuarios.
            </Text>
          ) : null}
        </View>

        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Button
            disabled={validAccess || validUsername}
            buttonStyle={style.botonConfirmar}
            titleStyle={style.tituloConfirmar}
            title="Confirmar"
            onPress={() => {
              handleSubmit();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default ShareAgents;
