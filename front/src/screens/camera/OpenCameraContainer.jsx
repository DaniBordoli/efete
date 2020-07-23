import React, { useState, useEffect, userRef, useRef } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import OpenCamera from "./OpenCamera";

export default function OpenCameraContainer() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uri, setUri] = useState(null);
  const [open, setOpen] = useState(false);

  const camRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const takePhoto = async () => {
    if (camRef) {
      const data = await camRef.current.takePictureAsync();
      setUri(data.uri);
      setOpen(true);
      console.log(data, "LaFOTO");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Acá volvemos a la vista de Agregar Establecimiento y guardamos la ruta de la imagen.
  };

  return (
    <OpenCamera
      handleCamera={handleCamera}
      type={type}
      hasPermission={hasPermission}
      camRef={camRef}
      takePhoto={takePhoto}
      uri={uri}
      handleClose={handleClose}
      open={open}
      handleConfirm={handleConfirm}
    />
  );
}
