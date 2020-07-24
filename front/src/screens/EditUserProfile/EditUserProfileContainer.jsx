import React, { useState } from "react";
import { View, Alert } from "react-native";
import EditUserProfile from "./EditUserProfile";
import { editUser , login_user} from "../../redux/store/actions/users";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.users.user);

  



  const [user, setUser] = useState(userInfo);

  

  function handleChange(e, name) {
    setUser({ ...user, [name]: e });
  }

  function handleSubmit() {
    if (user.username.length > 0 && user.password.length > 0) {
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
    <EditUserProfile
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      firstName={user.firstName}
      lastName={user.lastName}
      username={user.username}
      password={user.password}
    />
  );
};
