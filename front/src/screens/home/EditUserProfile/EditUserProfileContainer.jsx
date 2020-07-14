import React, { useState } from "react";
import { View } from "react-native";
import EditUserProfile from "../EditUserProfile/EditUserProfile";
import { editUser } from "../../../redux/store/actions/users";

export default () => {
  // tengo los datos hardcodeados, falta agregar un useselector para traer los datos del usuario logueado y agrgarlos en los useState
  const [firstName, setFirstName] = useState("Joaquin");
  const [lastName, setLastName] = useState("Gaona");
  const [username, setUsername] = useState("joacogaona@gmail.com");
  const [password, setPassword] = useState("1234");

  function handleChangeFirstName(e) {
    setFirstName(e);
  }
  function handleChangeLastName(e) {
    setLastName(e);
  }
  function handleChangeUsername(e) {
    setUsername(e);
  }
  function handleChangePassword(e) {
    setPassword(e);
  }
  // le harcodeo el id pero hay que traerlo con el useSelector del usuario logueado
  function handleSubmit(userData) {
    console.log("entro al submit");
    console.log(userData, "USERDATA");
    editUser(userData);
  }
  let userData = {
    // el id esta hardcodeado hay que traerlo con useselector
    id: "5f063aac7c500b6f49952348",
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
  };

  return (
    <View>
      <EditUserProfile
        handleChangeFirstName={handleChangeFirstName}
        handleChangeLastName={handleChangeLastName}
        handleChangeUsername={handleChangeUsername}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
        firstName={firstName}
        lastName={lastName}
        username={username}
        password={password}
        userData={userData}
      />
    </View>
  );
};
