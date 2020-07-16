import React from 'react'
import { View, Text, FlatList, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'


const ConfirmAgentLoad = ({ value }) => {

    const navigation = useNavigation();

    return(
        <View>
          <Text>

            Felicitaciones has realizado una recarga de: ${value} pesos
          </Text>

          <Button
         title="Volver"
         onPress={()=> navigation.goBack()}
         /> 

        </View>
    )
}

export default ConfirmAgentLoad;