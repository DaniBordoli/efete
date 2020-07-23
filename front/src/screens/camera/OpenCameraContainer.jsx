import React, { useState, useEffect, userRef, useRef } from "react";
import { Text, View } from "react-native";
import { Camera } from "expo-camera";
import OpenCamera from "./OpenCamera";
import * as Permissions from 'expo-permissions'
import * as MediaLibrary from 'expo-media-library'

export default function OpenCameraContainer({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturarFoto, setCapturarFoto] = useState(null);
  const [open, setOpen] = useState(false);

  const camRef = useRef(null);

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
      setOpen(true);
      console.log(data, "LaFOTO");
    }
  };


  const guardarFoto= async() =>{
    const asset= await MediaLibrary.createAssetAsync(capturarFoto).then(()=>{
          alert("foto guardada")
    })
    .catch(err =>{
      console.log("ERROR:",err)
    })
  }


  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    // Acá volvemos a la vista de Agregar Establecimiento y guardamos la ruta de la imagen.
    navigation.navigate('CreateAgentForm',{capturarFoto})
    console.log("CAPTURARFOTOOO:",capturarFoto)
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
