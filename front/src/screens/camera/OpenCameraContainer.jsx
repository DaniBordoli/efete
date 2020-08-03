import React, { useState } from "react";
import OpenCamera from "./OpenCamera";
import * as Permissions from "expo-permissions";
import _ from "lodash";
import { validateIdentity, editUser } from "../../redux/store/actions/users";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";

export default function OpenCameraContainer({ navigation, route }) {
  const [base64Foto, setBase64Foto] = useState(null);
  const [uriFoto, setUriFoto] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.users.user);
  const token = useSelector((state) => state.users.token);

  const openGallery = async () => {
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const {
      cancelled,
      uri,
      base64,
    } = await ImagePicker.launchImageLibraryAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!cancelled) {
      setBase64Foto(base64);
      setUriFoto(uri);
    }
  };

  const takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.3,
    });

    if (!cancelled) {
      setBase64Foto(base64);
      setUriFoto(uri);
    }
  };

  const handleConfirm = (e) => {
    if (route.params.identity) {
      navigation.navigate("WaitingValidation");
      dispatch(
        editUser({
          _id: user._id,
          processVerification: true,
        })
      ).then(() => {
        dispatch(
          validateIdentity(base64Foto, user.dni, user.gender, token, user._id)
        );
      });
    } else if (route.params.edit) {
      navigation.navigate("EditAgentProfile", { uriFoto });
    } else {
      navigation.navigate("CreateAgentForm", { uriFoto });
    }
  };

  return (
    <OpenCamera
      takePicture={takePicture}
      uriFoto={uriFoto}
      handleConfirm={handleConfirm}
      openGallery={openGallery}
    />
  );
}
