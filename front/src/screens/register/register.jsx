import React from "react";
import {
  View,
  TextInput,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Button } from "react-native-elements";
import { ButtonPrimary, Texto } from "../../Common/buttons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icons from "react-native-vector-icons/FontAwesome";
import DropDownPicker from "react-native-dropdown-picker";

import { style } from "./style.js";

export default ({
  firstNameChange,
  usernameChange,
  lastNameChange,
  dniChange,
  passwordChange,
  handleSubmit,
  navigation,
  user,
  handleGender,
}) => (
  <KeyboardAvoidingView style={{ flex: 1 }} behavior="height">
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 8 }}>
        <Text style={style.titulo}>Efeté</Text>
        <Text style={style.registrarse}>Registrarte</Text>

        <View style={style.inputContainer}>
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="account-circle-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              style={style.input}
              placeholder="Nombre"
              onChangeText={(text) => firstNameChange(text)}
            />
          </View>
          <View style={style.hr} />
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="account-circle-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              style={style.input}
              placeholder="Apellido"
              onChangeText={(text) => lastNameChange(text)}
            />
          </View>
          <View style={style.hr} />
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="account-circle-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              keyboardType="numeric"
              style={style.input}
              placeholder="DNI"
              onChangeText={(text) => dniChange(text)}
            />
          </View>
          {user.messageDni ? (
            <View>
              <Text style={style.alerta}>{user.messageDni}</Text>
            </View>
          ) : null}

          <View style={{ height: 56, flex: 1 }}>
            <DropDownPicker
              style={{
                flex: 1,
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 40,
                paddingLeft: 0,
              }}
              labelStyle={{ fontSize: 14, color: "#6F76E4", height: 30 }}
              items={[
                { label: "Sexo", value: "", selected: true },
                { label: "Femenino", value: "F" },
                { label: "Masculino", value: "M" },
              ]}
              defaultIndex={0}
              onChangeItem={(item) => handleGender(item.value)}
            />
          </View>
          {/* <View style={style.hr} /> */}
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="email-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              keyboardType="email-address"
              style={style.input}
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={(text) => usernameChange(text)}
            />
          </View>
          {user.messageUsername ? (
            <View>
              <Text style={style.alerta}>{user.messageUsername}</Text>
            </View>
          ) : null}
          <View style={style.hr} />
          <View style={style.searchSection}>
            <Icon
              style={style.searchIcon}
              name="lock-outline"
              size={24}
              color="#94AFB6"
            />
            <TextInput
              autoGrow={true}
              importantForAutofill="yes"
              autoCapitalize="none"
              secureTextEntry={true}
              password={true}
              style={style.input}
              placeholder="Contraseña"
              onChangeText={(text) => passwordChange(text)}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 20,
          }}
        >
          <Button
            icon={
              <Icons
                style={{ margin: 10 }}
                name="google"
                size={20}
                color="#d94821"
              />
            }
            buttonStyle={style.border}
            titleStyle={{ color: "#d94821", fontSize: 15 }}
            title="GOOGLE"
          />

          <Button
            icon={
              <Icons
                style={{ marginRight: 10 }}
                name="facebook"
                size={20}
                color="#3a5aa0"
              />
            }
            buttonStyle={style.border}
            titleStyle={{ color: "#3a5aa0", fontSize: 15 }}
            title="FACEBOOK"
          />
        </View>
      </View>
      <View
        style={{
          zIndex: -1,
          flex: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Button
            buttonStyle={style.botonIniciar}
            titleStyle={style.tituloIniciar}
            title="Registrarse"
            onPress={() => {
              handleSubmit();
            }}
          />

          <Button
            buttonStyle={style.botonRegister}
            titleStyle={style.tituloRegister}
            title="Iniciar Sesión"
            onPress={() => {
              navigation.navigate("Login");
            }}
          ></Button>
        </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);
