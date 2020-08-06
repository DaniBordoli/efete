import React, { useState } from "react";
import { register } from "../../redux/store/actions/users";
import Register from "./register";
import { useDispatch, useSelector } from "react-redux";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [validFirst, setValidFirst] = useState(true);
  const [validLast, setValidLast] = useState(true);
  const [validDni, setValidDni] = useState(true);
  const [validPass, setValidPass] = useState(true);
  const [validUser, setValidUser] = useState(true);
  const [validGender, setValidGender] = useState(true);

  const mode = useSelector((state) => state.users.mode);
  const user = useSelector((state) => state.users.user);

  function usernameChange(text) {
    setUsername(text);
    text.length > 0 ? setValidUser(false) : setValidUser(true);
  }
  function firstNameChange(text) {
    setFirstName(text);
    text.length > 0 ? setValidFirst(false) : setValidFirst(true);
  }
  function lastNameChange(text) {
    setLastName(text);
    text.length > 0 ? setValidLast(false) : setValidLast(true);
  }
  function dniChange(text) {
    setDni(text);
    text.length > 0 ? setValidDni(false) : setValidDni(true);
  }
  function passwordChange(text) {
    setPassword(text);
    text.length > 0 ? setValidPass(false) : setValidPass(true);
  }

  function handleGender(sexo) {
    setGender(sexo);
    sexo.length > 0 ? setValidGender(false) : setValidGender(true);
  }

  function handleSubmit() {
    dispatch(
      register(firstName, lastName, Number(dni), password, username, gender)
    ).then((data) => {
      if (data.user && data.user._id) {
        setFirstName("");
        setLastName("");
        setDni("");
        setPassword("");
        setUsername("");
        setGender("");
        navigation.navigate("Verificar");
      }
    });
  }

  return (
    <Register
      usernameChange={usernameChange}
      firstNameChange={firstNameChange}
      lastNameChange={lastNameChange}
      dniChange={dniChange}
      passwordChange={passwordChange}
      handleSubmit={handleSubmit}
      navigation={navigation}
      user={user}
      handleGender={handleGender}
      mode={mode}
      gender={gender}
      validDni={validDni}
      validFirst={validFirst}
      validGender={validGender}
      validLast={validLast}
      validPass={validPass}
      validUser={validUser}
      validGender={validGender}
    />
  );
};
