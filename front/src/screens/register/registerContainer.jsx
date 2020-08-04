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

  const mode = useSelector((state) => state.users.mode);
  const user = useSelector((state) => state.users.user);

  //const [isValid, setIsValid] = useState(false);

  function usernameChange(text) {
    setUsername(text);
    handleIsValid();
  }
  function firstNameChange(text) {
    setFirstName(text);
    handleIsValid();
  }
  function lastNameChange(text) {
    setLastName(text);
    handleIsValid();
  }
  function dniChange(text) {
    setDni(text);
    handleIsValid();
  }
  function passwordChange(text) {
    setPassword(text);
    handleIsValid();
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

  const handleIsValid = () => {
    console.log(dni.length, "DNI");
    console.log(gender.length, "GENDER");
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      dni.length > 0 &&
      password.length > 0 &&
      username.length > 0 &&
      gender.length > 0
    ) {
      console.log("ahora llegó");
      setIsValid(true);
    }
  };

  function handleGender(sexo) {
    console.log(sexo, "SEXO");
    setGender(sexo);
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
      //isValid={isValid}
    />
  );
};
