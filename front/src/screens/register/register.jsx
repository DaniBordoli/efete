import React from 'react';
import { View, TextInput,Text } from "react-native"

export default ({
    firstNameChange,
  usernameChange,
  lastNameChange,
  dniChange,
  passwordChange,
  handleSubmit,
  
}) => (
  <View >
   
    
   <View>
        <Text>Nombre</Text>
        <TextInput
          onPress={firstNameChange}
          placeholder="Nombre"
          
        />
      </View>
      <View>
        <Text>Apellido</Text>
        <TextInput
         onPress={lastNameChange}
          placeholder="Apellido"
          
        />
      </View>
      <View>
        <Text>DNI</Text>
        <TextInput
          onPress={dniChange}
          placeholder="DNI"
          
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          onPress={usernameChange}
          placeholder="Email"
          
        />
      </View>
      <View>
        <Text>Contraseña</Text>
        <TextInput
          onPress={passwordChange}
          placeholder="Contraseña"
          
        />
      </View>
      <Text onPress={handleSubmit}>
        Registrarse
      </Text>
    

  </View>
);
