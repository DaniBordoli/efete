import React from "react";
import { View, Text, TextInput, KeyboardAvoidingView , ScrollView} from "react-native";
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
    <KeyboardAvoidingView style={{ flex: 1}} behavior="height">
      <View style={{flex:7}}>
      <Text style={style.textoo}>Agregar cuenta</Text>

          <DropDownPicker 
              labelStyle={{fontSize: 14, color: '#6F76E4'}}
              items={banks.map(item =>(
                {label: `${item.nameEntity}`, value: item._id}
            )) }
              defaultIndex={1}
              placeholder="Seleccione su Entidad Bancaria"
              containerStyle={style.dropdown}
              onChangeItem={item => handleBank(item.value)}/>
      
            <DropDownPicker 
                  labelStyle={{fontSize: 14, color: '#6F76E4' }}
                  items={[
                      {label: 'CBU', value: 'CBU'},
                      {label: 'CVU', value: 'CVU'},
                      {label: 'Selecciona tipo de cuenta', value: '', selected: true},
                  ]}
                  defaultIndex={0}
                  containerStyle={style.dropdown}
                  onChangeItem={item => handleCbu(item.value)} />

            <Text style={style.text}>NUMERO DE CUENTA</Text>
            <TextInput
              keyboardType='numeric'
              style={style.input}

              placeholder="Ingrese su número de cuenta"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(accountNumber) => handleAccountNumber(accountNumber)}/>


      </View>
       
      {/* {account.length < 22 ? <Text>La cuenta debe contener al menos 22 numeros</Text> : null} */}
        <View
          
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            flex:1,
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
    </KeyboardAvoidingView>
  );
};

export default AddAccount;
