import React from "react";
import ValidarIdentidad from "./ValidarIdentidad";
import { useDispatch } from "react-redux";
import { generateToken } from "../../redux/store/actions/users";

const ValidarIdentidadContainer = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleToken = () => {
    console.log("LLEGUE A HANDLETOKEN");
    dispatch(generateToken());
    navigation.navigate("OpenCamera", { identity: true });
  };

  return <ValidarIdentidad handleToken={handleToken} />;
};

export default ValidarIdentidadContainer;
