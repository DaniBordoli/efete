import React, { useEffect } from "react";
import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, TouchableWithoutFeedback, Button, Keyboard  }from "react-native";

/* export default ({ navigation }) => {


  return (
  
    <View>
      <Text> PANTALLA HOME </Text>
      <Button
                onPress={() => navigation.navigate("EditUserProfile")}
                title="Go To Details"
            />
            <Button
                onPress={() => navigation.navigate("Verificar")}
                title="Go To Details"
            />
    </View>
  );
};
 */



export default ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={-100000}
      style={styles.container}
    >
      
        <View style={styles.inner}>
          <Text style={styles.header}>Header</Text>
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />
          <TextInput placeholder="Username" style={styles.textInput} />

          <View style={styles.btnContainer}>
            <Button title="Submit" onPress={() => null} />
          </View>
        </View>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
    flex: 1,

  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
    flex: 1,

  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});