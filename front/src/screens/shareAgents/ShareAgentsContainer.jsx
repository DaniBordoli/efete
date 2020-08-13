import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShareAgents from "./ShareAgents";
import { shareAgent } from "../../redux/store/actions/sharedAgents";
import { Alert } from "react-native";

export default ({ navigation, route }) => {
  const agent = route.params.agent;

  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);

  const [access, setAccess] = useState("");
  const [username, setUsername] = useState("");

  const [validUsername, setValidUsername] = useState(true);
  const [validAccess, setValidAccess] = useState(true);

  const handleAccess = (access) => {
    setAccess(access);
    access.length > 0 ? setValidAccess(false) : setValidAccess(true);
  };

  const handleUsername = (username) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    setUsername(username);
    reg.test(username) ? setValidUsername(false) : setValidUsername(true);
  };

  const handleSubmit = () => {
    dispatch(shareAgent(username, agent, access)).then((data) => {
      if (data.agent.message) {
        Alert.alert(
          "Oops",
          data.agent.message,
          [
            {
              text: "OK",
              onPress: () => {
                setAccess("");
                setUsername("");
                setValidUsername(true);
              },
            },
          ],
          { cancelable: false }
        );
      } else {
        Alert.alert(
          "Felicitaciones!",
          `Le hemos enviado un correo al usuario ${username}`,
          [
            {
              text: "OK",
              onPress: () => {
                setAccess("");
                setUsername("");
                setValidUsername(true);
              },
            },
          ],
          { cancelable: false }
        );
      }
    });
  };

  return (
    <ShareAgents
      handleSubmit={handleSubmit}
      mode={mode}
      handleAccess={handleAccess}
      handleUsername={handleUsername}
      validUsername={validUsername}
      validAccess={validAccess}
      access={access}
      username={username}
    />
  );
};
