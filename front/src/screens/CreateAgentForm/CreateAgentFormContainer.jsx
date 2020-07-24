import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CreateAgentForm from "./CreateAgentForm";
import { createAgent } from "../../redux/store/actions/agents";
import { useDispatch, useSelector } from "react-redux";

const CreateAgentFormContainer = ({ navigation , route}) => {

  const [foto, setFoto] = useState("");

  
  useEffect(()=>{
    route.params ? setFoto(route.params.capturarFoto) : "No hay fotos"
  })

  
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cuil, setCuil] = useState(0);
  const [dailyAmount, setDailyAmount] = useState(0);
  const [codigoQr, setCodigoQr] = useState("");

  function handlerName(text) {
    setName(text);
  }
  function handlerAddress(text) {
    setAddress(text);
  }

  function handlerCuil(text) {
    setCuil(Number(text));
  }

  function handlerDailyAmount(text) {
    setDailyAmount(Number(text));
  }

  function handlerCodigo(text) {
    setCodigoQr(text);
  }

  function handlerSubmit() {
    dispatch(createAgent(name, address, cuil, dailyAmount, codigoQr, user._id));
  }

  return (
      <CreateAgentForm
        handlerName={handlerName}
        handlerAddress={handlerAddress}
        handlerCuil={handlerCuil}
        handlerDailyAmount={handlerDailyAmount}
        handlerCodigo={handlerCodigo}
        handlerSubmit={handlerSubmit}
        navigation={navigation}
        fotos={foto}
      />
  );
};
export default CreateAgentFormContainer;
