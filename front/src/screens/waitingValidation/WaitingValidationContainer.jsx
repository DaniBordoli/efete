import React from "react";
import WaitingValidation from "./WaitingValidation";
import { useDispatch } from "react-redux";
import { generateToken } from "../../redux/store/actions/users";

const WaitingValidationContainer = () => {
  return <WaitingValidation />;
};

export default WaitingValidationContainer;
