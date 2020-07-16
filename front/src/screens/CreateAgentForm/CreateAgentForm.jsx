import React from "react";
import { View, TextInput, Text, Button } from "react-native";
import { styles } from "./styles";

const CreateAgentForm = ({
    handlerCodigo,
    handlerDailyAmount,
    handlerCuil,
    handlerAddress,
    handlerName,
    handlerSubmit,
    navigation
}) => {

    return(
        <View>
         
            <Text style={styles.text}>Nombre</Text>
            <TextInput
             style={styles.inp}
             onChangeText={(text) => handlerName(text)}
             placeholder="Nombre"
             />
               <Text style={styles.text}>Dirección</Text>
            <TextInput
             style={styles.inp}
             onChangeText={(text) => handlerAddress(text)}
             placeholder="Dirección"
             />

            <Text style={styles.text}>CUIL</Text>
            <TextInput
             style={styles.inp}
             onChangeText={(num) => handlerCuil(num)}
             placeholder="CUIL"
             />

            <Text style={styles.text}>Monto diario</Text>
            <TextInput
             style={styles.inp}
             onChangeText={(num) => handlerDailyAmount(num)}
             placeholder="Monto diario"
             />

           
            <Text style={styles.text}>Codigo QR</Text>
            <TextInput
             style={styles.inp}
             onChangeText={(text) => handlerCodigo(text)}
             placeholder="Codigo QR"
             />

            <Button
            title='Enviar'
            onPress={() => {
            handlerSubmit();
            navigation.navigate("Home");
            }}
            />
           
        </View>
    )
}

export default CreateAgentForm;