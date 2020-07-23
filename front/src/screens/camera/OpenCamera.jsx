import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  Modal,
  Image,
  StyleSheet
} from "react-native";
import { Camera } from "expo-camera";
import {FontAwesome} from '@expo/vector-icons'
export default ({
  hasPermission,
  camRef,
  tomaFoto,
  capturarFoto,
  open,
  handleClose,
  handleConfirm,
  guardarFoto
}) => {
  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={camRef}
        style={{ flex: 1 }}
        type={Camera.Constants.Type.back}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        ></View>
      </Camera>
      <TouchableOpacity style={style.button} onPress={() => tomaFoto()} >
      <FontAwesome name='camera' size={23} color={'white'} />
      </TouchableOpacity>
      
      {capturarFoto && (
        <Modal animationType="slide" transparent={false} visible={open}>
          <View style={{flex:1 , justifyContent:'center', alignItems:'center',margin:20, }}>
            <View style={{flexDirection:'row', margin:10, alignSelf:'flex-end'}}>
            <TouchableOpacity
            style={{margin:10 }}
              onPress={() => {
                handleClose();
              }}
            >
              <FontAwesome name="window-close" size={50} color="red"/>
            </TouchableOpacity>

           


            </View>
            
                
           {/*  <TouchableOpacity
              onPress={() => {
                handleConfirm();
              }}
            >
              <Text>Confirmar</Text>
            </TouchableOpacity> */}
            <Image style={{width:'100%', height:'80%', borderRadius:20}} 
            source={{ uri: capturarFoto }} />

            <View style={{flexDirection:'row', margin:10}}>
            <TouchableOpacity
            style={{margin:10}}
              onPress={() => {
                //guardarFoto();
                handleConfirm()
              }}
            >
              <FontAwesome name="upload" size={50} color="blue"/>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};


const style = StyleSheet.create({
button:{
  justifyContent:'center',
  alignItems:'center',
  margin:20,
  borderRadius:10,
  height:50,
  backgroundColor:"blue"
}




})