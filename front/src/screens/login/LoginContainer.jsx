import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logUser, verifyEmail } from "../../redux/store/actions/users";
import Login from "./Login";

import { View } from "react-native";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isData, setIsData] = useState(true);

  const handleValueUsername = (username) => {
    setUsername(username);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleValuePassword = (password) => {
    setPassword(password);
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleIsData = () => {
    username.length > 0 && password.length > 0
      ? setIsData(false)
      : setIsData(true);
  };

  const handleSubmit = () => {
    dispatch(logUser({ username: username, password: password })).then(
      (data) => {
        if (data.user._id && data.user.isVerified)
          navigation.navigate("User", { user: data.user._id });
      }
    );
  };

  const handleVerifyAccount = () => {
    dispatch(verifyEmail(user._id)).then(() => {
      navigation.navigate("Verificar");
    });
  };

  return (
    
      <Login
        isData={isData}
        handleIsData={handleIsData}
        handleValueUsername={handleValueUsername}
        handleValuePassword={handleValuePassword}
        handleSubmit={handleSubmit}
        username={username}
        password={password}
        user={user}
        navigation={navigation}
        handleVerifyAccount={handleVerifyAccount}
      />
    
  );
};
