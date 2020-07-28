import React from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView
  
} from "react-native";
import { style } from "./style";
import { MaterialIcons } from '@expo/vector-icons'; 
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";


const CreateAgentForm = ({
  handlerCodigo,
  handlerDailyAmount,
  handlerCuil,
  handlerAddress,
  handlerName,
  handlerSubmit,
  navigation,
  fotos,
  notifyChange
}) => {

  return (
    
    <View style={{flex:1}} >
    

    
      
      <Text style={style.containerTitle}>Agregar Establecimiento</Text>

      <View style={style.container}>

      <Text style={{ alignSelf:'flex-start',marginLeft:10,marginBottom:10,
    color: "#424242"}}>Dirección</Text>
        
<View style={{backgroundColor:'white', width:'100%', flexDirection:'row', marginBottom:18}}>

<GooglePlacesAutocomplete
       styles={{textInputContainer:{width:"95%",alignSelf:'center' , elevation:3, backgroundColor:'white', borderRadius:5} ,
       textInput:{marginBottom:0, marginTop:0, marginLeft:0, marginRight:0, height:'100%'}}}

        
       enablePoweredByContainer={false}
        placeholder="Buscar direccion"
        returnKeyType={"search"}
        listViewDisplayed='auto'
        fetchDetails={true}
        onPress={(data, detail = null) => {
          notifyChange(detail.geometry.location)
          handlerAddress(data)
        }}
        query={{ key: "AIzaSyBV-TT8w7N3TC9LDFGIQOk9BmN1iX10arg" }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={200}
      />
     </View>

      <View>
      <Text style={style.title}>Nombre</Text>
      <TextInput
        style={style.input}
        onChangeText={(text) => handlerName(text)}
        placeholder="Ingrese el nombre del establecimiento"
      />
      </View>

      <View>
          <Text style={style.title}>CUIL</Text>
          <TextInput
            keyboardType="numeric"
            style={style.input}
            onChangeText={(num) => handlerCuil(num)}
            placeholder="Ingrese su numero de CUIL"
          />
        </View>
      
      <View>
        
    
     
      </View>

       
       


      </View>
      

      {/* <View>
      <Text style={style.title}>Codigo QR</Text>
      <TextInput
        onChangeText={(text) => handlerCodigo(text)}
        placeholder="Codigo QR"
      />
      </View> */}

      {/* Aqui va el QR */}
      {fotos ?  (
      <Image style={style.image} 
            source={{ uri: fotos }} />
      ) : null
        }
        {/* Aqui va el QR */}

        <TouchableOpacity
          style={style.openCamera}
          title="Open Camera"
          onPress={() => {
            navigation.navigate("OpenCamera");
          }}
        >
          <Text style={style.textOpenCamera}>Subir foto</Text>
          <MaterialIcons name="camera-alt" size={27} color="white" style={style.foto}/>
          <Text style={style.textMaxsize}>Subir imagenes - Max 300 Kb</Text>
        </TouchableOpacity>

        
      
      <TouchableOpacity
        style={style.confirmar}
        title="Confirmar"
        onPress={() => {
        handlerSubmit();
        navigation.navigate("createdAgentOk");
        }}
      >
      <Text style={style.textConfirmar}>CONFIRMAR</Text>
      </TouchableOpacity>
</View>
  );
};

export default CreateAgentForm;
