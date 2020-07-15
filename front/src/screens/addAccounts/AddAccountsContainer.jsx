import React, {useState} from "react";
import { useDispatch } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import {View} from "react-native"
import {addAccounts} from "../../redux/store/actions/accounts"


export default ({navigation}) => {
  const dispatch = useDispatch();

  const [name, setNameAccount] = useState('');
  const handleNameAccount = (name) => {
    setNameAccount(name);
  };

  const [cbu, setCbu] = useState('');
  const handleCbu = (cbu) => {
    setCbu(cbu);
  };

  const [dni, setDni] = useState('');
  const handleDni = (dni) => {
    console.log('dni',dni)
    setDni(dni);
  };


  const handleSubmit = () => {

    dispatch(addAccounts(name,cbu,dni))

  };

  

  return (
    <View>
      <AddAccounts
        handleNameAccount={handleNameAccount}
        handleCbu={handleCbu}
        handleDni={handleDni}
        handleSubmit={handleSubmit}
        navigation={navigation}
        name={name}
        cbu={cbu}
        dni={dni}
      />
    </View>
  );
};

