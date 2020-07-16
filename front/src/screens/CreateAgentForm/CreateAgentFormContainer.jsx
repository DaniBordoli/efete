import React, { useState } from "react";
import {View } from "react-native";
import CreateAgentForm from "./CreateAgentForm"
import { createAgent } from '../../redux/store/actions/agents'
import { useDispatch } from "react-redux";


const CreateAgentFormContainer = ({ navigation}) => {
  const dispatch = useDispatch();

    
const [name, setName] = useState('');
const [address, setAddress] =  useState('');
const [cuil, setCuil] = useState(0);  
const [dailyAmount, setDailyAmount] = useState(0);
const [codigoQr, setCodigoQr] = useState('')


function handlerName(text){
    setName(text)
}
  function handlerAddress(text){
    setAddress(text)
}

function handlerCuil(text){
  setCuil(Number(text))
}

function handlerDailyAmount(text){
  setDailyAmount(Number(text))
}

function handlerCodigo(text){
  setCodigoQr(text)
}
  
function handlerSubmit(){
  console.log('!!!!!!!!!',name, address, cuil, dailyAmount, codigoQr)
  dispatch(createAgent(name, address, cuil, dailyAmount, codigoQr))
}
  
  
  return(
        <View>
          <CreateAgentForm
           handlerName={handlerName}
           handlerAddress={handlerAddress}
           handlerCuil={handlerCuil}
           handlerDailyAmount={handlerDailyAmount}
           handlerCodigo={handlerCodigo}
           handlerSubmit={handlerSubmit}
           navigation={navigation}
          />
        </View>
    )
}
export default CreateAgentFormContainer;