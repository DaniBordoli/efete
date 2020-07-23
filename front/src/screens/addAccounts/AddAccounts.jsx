import React from "react";
import { View, Text, TextInput } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { style } from "./style.js";
import { Button } from "react-native-elements";


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
        <View style={style.acc}>
          <DropDownPicker style={style.dropdown}
              labelStyle={{fontSize: 14, color: '#6F76E4'}}
              items={banks.map(item =>(
                {label: `${item.nameEntity}`, value: item._id}
            )) }
              defaultIndex={1}
              placeholder="Seleccione su Entidad Bancaria"
              containerStyle={{height: 40}}
              onChangeItem={item => handleBank(item.value)}/>
        </View>
      
        <View style={style.acc}> 
          <DropDownPicker style={style.dropdown}
                labelStyle={{fontSize: 14, color: '#6F76E4'}}
                items={[
                    {label: 'CBU', value: 'CBU', selected: true},
                    {label: 'CVU', value: 'CVU'},
                ]}
                defaultIndex={0}
                containerStyle={{height: 40}}
                onChangeItem={item => handleCbu(item.value)}
          />
        </View>
      <View style={style.acc}>
        <Text style={style.text}>Número de Cuenta</Text>
        <TextInput
          style={style.input}
          placeholder="Ingrese su número de cuenta"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(accountNumber) => handleAccountNumber(accountNumber)}
        />
        </View>
      {/* {account.length < 22 ? <Text>La cuenta debe contener al menos 22 numeros</Text> : null} */}
        <View
          style={{ flex: 8 }}
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            marginTop: 100,
          }}>
          <Button
            buttonStyle={style.botonConfirmar}
            titleStyle={style.tituloConfirmar}
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
