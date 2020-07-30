import React, { useState, useEffect, userRef, useRef } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import OpenCamera from "./OpenCamera";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import firebase from "../../firebase/index";
import { Alert } from "react-native";
import { YellowBox } from "react-native";
import _ from "lodash";
import { validateIdentity, editUser } from "../../redux/store/actions/users";
import { useSelector, useDispatch } from "react-redux";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";

export default function OpenCameraContainer({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturarFoto, setCapturarFoto] = useState(null);
  const [dataFoto, setDataFoto] = useState({});
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const camRef = useRef(null);

  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();

    (async () => {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Acceso denegado !</Text>;
  }

  const tomaFoto = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setCapturarFoto(data.uri);
      setDataFoto(data);
      setOpen(true);
      console.log(data, "LaFOTO");
    }
  };

  const guardarFoto = async () => {
    const asset = await MediaLibrary.createAssetAsync(capturarFoto)
      .then(() => {
        alert("foto guardada");
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const imageResize = async () =>
    await ImageManipulator.manipulateAsync(
      (`${capturarFoto}`,
      [],
      { compress: 0.5, format: ImageManipulator.SaveFormat.JPEG })
    ).then((data) => {
      console.log(data, "IMAGEN RESIZE");
    });

  const uriEncoded = async () =>
    await FileSystem.readAsStringAsync(capturarFoto, {
      encoding: FileSystem.EncodingType.Base64,
    });

  const handleConfirm = (e) => {
    setOpen(false);
    if (route.params.identity) {
      navigation.navigate("WaitingValidation");
      dispatch(
        editUser({
          _id: user._id,
          processVerification: true,
        })
      )
        .then(() => {
          imageResize();
          return uriEncoded();
        })
        .then((uri) => {
          console.log("URI64", uri.slice(0, 50));
          dispatch(validateIdentity(uri, "37245882", "M", token));
        });
    } else if (route.params.edit) {
      navigation.navigate("EditAgentProfile", { capturarFoto });
    } else {
      navigation.navigate("CreateAgentForm", { capturarFoto });
    }
  };

  return (
    <OpenCamera
      hasPermission={hasPermission}
      camRef={camRef}
      tomaFoto={tomaFoto}
      capturarFoto={capturarFoto}
      handleClose={handleClose}
      open={open}
      handleConfirm={handleConfirm}
      guardarFoto={guardarFoto}
    />
  );
}
