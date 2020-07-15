import React from "react";
import { View, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const ConfAmountAgent = (onChangeInput, valueHandler, handlerCounter) => {
    console.log('Counter', handlerCounter)
    return(
        <View>
           <TextInput
           style={styles.input}
           autoCapitalize='none'
           autoCorrect={false}
           value={onChangeInput.inputValue}
           onChangeText={onChangeInput.onChangeInput}
           />
           <TouchableOpacity
           style={styles.button}
           onPress={handlerCounter}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1 
    },
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
    }    

})

export default ConfAmountAgent;
