import React, { useState, useEffect } from "react";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { Text } from "react-native";
import { fetchAgent } from "../../redux/store/actions/agents";
import { headerColor, fondoColor } from "../../Common/constans";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchMainAccount } from "../../redux/store/actions/accounts";
import { style } from "../allAgentTransactions/style";

export default ({navigation}) => {
  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);
  useEffect(() => {
    //dispatch(fetchAgent());
    dispatch(fetchMainAccount(userId));
    /*     setLoading(true)
     */
  }, []);

  const userId = useSelector((state) => state.users.user._id);
  const agentId = useSelector((state) => state.agents.agent._id)
  const mainAccount = useSelector((state) => state.accounts.mainAccount);

  /* const [user, userSet] = useState('')
  const [loading, setLoading] = useState(false); */

  return (
    <View style={{ flex: 1 , backgroundColor: mode ? fondoColor : 'black'}}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.texto}>Escanea el codigo y retira tu dinero</Text>
      </View>
      <View style={styles.container}>
      
      {mainAccount._id 
      ? (        
      <QRCode 
      content={`${agentId},${mainAccount._id},${mainAccount.accountNumber}`}
      />
      ) :(
      <View style={styles.container}> 
      <Text style={styles.description}>Tienes que tener una cuenta creada o elegir una cuenta predeterminada para continuar</Text>
      <TouchableOpacity
      style={styles.boton}
      onPress={()=> navigation.navigate('AddAccounts')}
      >
      <Text style={styles.botonTxt}>IR A CUENTAS</Text>
      </TouchableOpacity>
      </View>)
      }

      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  texto: {
    marginLeft: 36,
    marginRight: 36,
    fontSize: 28,
    marginTop: 15,
    marginBottom: 13,
    textAlign: "center",
    fontFamily: "nunito-bold",
    color: headerColor,
    textAlign: "center",
  },
  texto2: {
    fontSize: 21,
    color: "#4F9FFF",
    marginTop: 20,
    textAlign: "center",
  },
  description:{
    textAlign: 'center',
    fontSize: 15,
    margin: '2%'
  },
  boton:{
  borderColor: '#6F76E4',
  borderWidth: 1,
  margin: '2%'
  },
  botonTxt:{
   fontFamily: 'nunito',
   fontSize: 15, 
   color: '#6F76E4',
   paddingLeft: '4%',
   paddingRight: '4%',
   paddingTop: '2%',
   paddingBottom: '2%'
  }
});
