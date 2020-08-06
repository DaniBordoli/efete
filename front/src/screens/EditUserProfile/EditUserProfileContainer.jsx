import React, { useState } from "react";
import { View, Alert } from "react-native";
import EditUserProfile from "./EditUserProfile";
import { editUser, login_user } from "../../redux/store/actions/users";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.users.user);

  const mode = useSelector((state) => state.users.mode);

  const [user, setUser] = useState({
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    username: userInfo.username,
    password: userInfo.password,
    _id: userInfo._id,
  });
  const [isData, setIsData] = useState(true);
  const [data, setData] = useState({ secureTextEntry: true });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  function handleChange(e, name) {
    setUser({ ...user, [name]: e });
    const length = Object.values({ ...user, [name]: e }).length;
    const filteredLength = Object.values({ ...user, [name]: e }).filter(
      (value) => value.length > 0
    ).length;
    filteredLength < length ? setIsData(true) : setIsData(false);
  }

  function handleSubmit() {
    if (user.username.length > 0) {
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
      mode={mode}
      data={data}
      isData={isData}
      updateSecureTextEntry={updateSecureTextEntry}
    />
  );
};
