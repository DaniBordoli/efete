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

  const [user, setUser] = useState({firstName: userInfo.firstName, lastName: userInfo.lastName, username: userInfo.username, password: "", _id: userInfo._id });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);
  const [data, setData] = useState({ secureTextEntry: true });

  
  


  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValuePassword = (password) => {
    setPassword(password);
    setUser({...user, ["password"]: password})
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
      /* handleIsValid */
  };

  const handleIsData = () => {
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
      /* handleIsValid */
  };


  

  function handleChange(e, name) {
    setUser({ ...user, [name]: e });
    /* handleIsValid */
  }

  function handleSubmit() {
console.log('USER!!!!!!', user)
    if (user.username.length > 0) {
      dispatch(editUser(user));
      console.log("Entreee Loco user", user)
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
