import React, { useState, useEffect } from "react";
import CreateAgentForm from "./CreateAgentForm";
import { createAgent, editAgent } from "../../redux/store/actions/agents";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../../firebase/index";
import { Alert } from "react-native";
import { YellowBox } from "react-native";
import _ from "lodash";

const CreateAgentFormContainer = ({ navigation, route }) => {
  const [foto, setFoto] = useState("");
  const [ubicacion, setUbicacion] = useState({});

  const mode = useSelector((state) => state.users.mode);

  useEffect(() => {
    if (route.params) {
      setFoto(route.params.uriFoto);
      setValidUri(true);
    } else {
      ("No hay fotos");
    }
  });

  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const getCoordsFromName = (loc) => {
    setUbicacion({ latitude: loc.lat, longitude: loc.lng });
    console.log(loc.lat, "LATITUDE");
    loc.lat ? setValidUbicacion(true) : setValidUbicacion(false);
  };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [cuil, setCuil] = useState("");
  const [validName, setValidName] = useState(false);
  const [validAdress, setValidAdress] = useState(false);
  const [validCuil, setValidCuil] = useState(false);
  const [validUri, setValidUri] = useState(false);
  const [validUbicacion, setValidUbicacion] = useState(false);

  function handlerName(text) {
    setName(text);
    text.length > 0 ? setValidName(true) : setValidName(false);
  }
  function handlerAddress(text) {
    console.log(text.description, "ADDRESS");
    YellowBox.ignoreWarnings(["VirtualizedLists should never be nested"]);
    setAddress(text.description);
    text.description.length > 0 ? setValidAdress(true) : setValidAdress(false);
  }

  function handlerCuil(text) {
    setCuil(text);
    text.length > 0 ? setValidCuil(true) : setValidCuil(false);
  }

  const uploadImage = async (uri, agentId) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("images/" + user._id + "-" + address);

    YellowBox.ignoreWarnings(["Setting a timer"]);
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
            imageUrl: url,
            _id: agentId,
          })
        );
      });
    });
  };

  function handlerSubmit() {
    dispatch(createAgent(name, address, ubicacion, cuil, user._id))
      .then((data) => {
        uploadImage(foto, data.newStore.id);
      })
      .catch((error) => {
        Alert.alert("Error al subir foto");
      });
  }

  return (
    <CreateAgentForm
      handlerName={handlerName}
      handlerAddress={handlerAddress}
      handlerCuil={handlerCuil}
      handlerSubmit={handlerSubmit}
      navigation={navigation}
      fotos={foto}
      name={name}
      address={address}
      cuil={cuil}
      mode={mode}
      notifyChange={(loc) => getCoordsFromName(loc)}
      validName={validName}
      validAdress={validAdress}
      validCuil={validCuil}
      validUri={validUri}
      validUbicacion={validUbicacion}
    />
  );
};
export default CreateAgentFormContainer;
