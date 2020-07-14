import React, { useState } from "react";
import { View, Alert } from "react-native";
import EditAgent from "../EditAgent/EditAgent";
import { editUser } from "../../../redux/store/actions/users";
import { useDispatch } from "react-redux";

export default () => {
  // tengo los datos hardcodeados, falta agregar un useselector para traer los datos del usuario logueado y agrgarlos en los useState
  // user.name ? user.name:'' (agregar este ternario para esperar al back que busque los datos de usuario?)
  const [user, setUser] = useState({
    firstName: "Joaquin",
    lastName: "Gaona",
    username: "joacogaona@gmail.com",
    password: "1234",
    id: "5f063aac7c500b6f49952348",
  });

  const [inputs, setInput] = useState({
    inputFirstName: false,
    inputLastName: false,
    inputUsername: false,
    inputPassword: false,
  });

  const dispatch = useDispatch();

  function handleChange(e, name) {
    setUser({ ...user, [name]: e });
  }

  // le harcodeo el id pero hay que traerlo con el useSelector del usuario logueado
  function handleSubmit() {
    if (
      user.firstName.length > 0 &&
      user.lastName.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      dispatch(editUser(user));
      Alert.alert(
        "Datos actualizados",
        "Tus datos se actualiazaron correctamente",
        [{ text: "OK" }]
      );
    } else {
      Alert.alert("Campo vacío", "Por favor completa todos los datos", [
        { text: "OK" },
      ]);
    }
  }

  return (
    <View>
      <EditUserProfile
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        firstName={user.firstName}
        lastName={user.lastName}
        username={user.username}
        password={user.password}
        inputs={inputs}
      />
    </View>
  );
};
