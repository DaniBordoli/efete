import React, { useState, useEffect } from "react";
import { View, Alert } from "react-native";
import EditAgent from "./EditAgent";
import { useDispatch, useSelector } from "react-redux";
import { editAgent, fetchAgent } from "../../redux/store/actions/agents";
import _ from "lodash";
/* import uuid from "react-native-uuid"; */
import firebase from "../../firebase/index";
import { YellowBox } from "react-native";

export default ({ navigation, route }) => {
  const agentInfo = useSelector((state) => state.agents.agent);

  const [agent, setAgent] = useState(agentInfo);

  const dispatch = useDispatch();

  const userId = useSelector((state) => state.users.user._id);

  useEffect(() => {
    dispatch(fetchAgent(userId));
    route.params
      ? setAgent({ ...agent, imageUrl: route.params.capturarFoto })
      : null;
  }, [route.params]);

  function handleChange(e, name) {
    setAgent({ ...agent, [name]: e });
  }
  uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    /* let fotoUUID = uuid.v4(); */

    var ref = firebase
      .storage()
      .ref()
      .child("images/" + userId + "-" + agent.address);

    YellowBox.ignoreWarnings(["Setting a timer"]); //esto evita un warning por el await
    const _console = _.clone(console);
    console.warn = (message) => {
      if (message.indexOf("Setting a timer") <= -1) {
        _console.warn(message);
      }
    };

    return ref.put(blob).then(async (snapshot) => {
      await snapshot.ref.getDownloadURL().then((url) => {
        dispatch(
          editAgent({
            name: agent.name,
            address: agent.address,
            imageUrl: url,
            cuil: agent.cuil,
            _id: agent._id,
          })
        );
      });
    });
  };

  function handleSubmit() {
    if (agent.name.length > 0 && agent.address.length > 0) {
      if (route.params) {
        uploadImage(route.params.capturarFoto);
      } else {
        dispatch(
          editAgent({
            name: agent.name,
            address: agent.address,
            cuil: agent.cuil,
            _id: agent._id,
          })
        );
      }
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
    <EditAgent
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      name={agent.name}
      address={agent.address}
      cuil={agent.cuil}
      navigation={navigation}
      image={agent.imageUrl}
    />
  );
};
