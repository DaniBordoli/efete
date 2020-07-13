import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Test from './src/redux/Test'

export default function App() {
  return (
    <View style={styles.container}>
      <Test/>
      <Text style={{color:"white"}}>EFETE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6F76E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
