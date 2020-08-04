import React, { useState } from "react";
import { View, Alert } from "react-native";
import EditUserProfile from "./EditUserProfile";
import { editUser, login_user } from "../../redux/store/actions/users";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.users.user);

  const mode = useSelector((state) => state.users.mode
  ); 

  const [user, setUser] = useState(userInfo);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);
  const [data, setData] = useState({ secureTextEntry: true });

  const handleValueUsername = (username) => {
    setUsername(username);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValuePassword = (password) => {
    console.log('PASSWOORD', password)
    setPassword(password);
    setUser({...user, ['password']: password})
    console.log('User!!!!! Cont', user)
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleIsData = () => {
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };




  function handleChange(e, name) {
    setUser({ ...user, [name]: e });
  }

  function handleSubmit() {
    if (user.username.length > 0 && user.password.length > 0) {
      dispatch(editUser(user));
      console.log("UserInfo!!!!!!!!!!!!", user)
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
      mode={mode}
      data={data}
      isData={isData}
      updateSecureTextEntry={updateSecureTextEntry}
      handleValuePassword={handleValuePassword}
      handleIsData={handleIsData}
    />
  );
};
