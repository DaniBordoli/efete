import React, { useState } from "react";
import OpenCamera from "./OpenCamera";
import * as Permissions from "expo-permissions";
import _ from "lodash";
import {
  validateIdentity,
  userValidation,
} from "../../redux/store/actions/users";
import { useSelector, useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";

export default function OpenCameraContainer({ navigation, route, view }) {
  const [base64Foto, setBase64Foto] = useState(null);
  const [uriFoto, setUriFoto] = useState(null);
  const [modal, setModal] = useState(false);

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
      setModal(true);
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
      setModal(true);
    }
  };

  const handleConfirm = (e) => {
    if (view === "ValidateIdentity") {
      setModal(false);
      setUriFoto(null);
      navigation.navigate("WaitingValidation");
      dispatch(
        userValidation({
          _id: user._id,
          processVerification: true,
        })
      ).then(() => {
        dispatch(
          validateIdentity(base64Foto, user.dni, user.gender, token, user._id)
        );
      });
    } else if (view === "EditAgentProfile") {
      setModal(false);

      navigation.navigate("EditAgentProfile", { uriFoto });
    } else {
      setModal(false);
      navigation.navigate("CreateAgentForm", { uriFoto });
    }
  };

  const handleCancel = () => {
    setUriFoto(null);
  };

  return (
    <OpenCamera
      takePicture={takePicture}
      uriFoto={uriFoto}
      handleConfirm={handleConfirm}
      openGallery={openGallery}
      handleCancel={handleCancel}
      modal={modal}
    />
  );
}
