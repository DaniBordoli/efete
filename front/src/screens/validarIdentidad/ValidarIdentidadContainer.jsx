import React, { useState, useEffect } from "react";
import ValidarIdentidad from "./ValidarIdentidad";
import { useDispatch, useSelector } from "react-redux";
import { generateToken } from "../../redux/store/actions/users";

const ValidarIdentidadContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const view = "ValidateIdentity";

  useEffect(() => {
    dispatch(generateToken());
  }, []);

  return <ValidarIdentidad view={view} navigation={navigation} mode={mode} />;
};

export default ValidarIdentidadContainer;
