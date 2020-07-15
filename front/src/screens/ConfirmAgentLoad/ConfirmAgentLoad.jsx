import React from 'react'
import { View, Text, FlatList, Button } from "react-native";


const ConfirmAgentLoad = ({value}) => {
    console.log('Value', value)
    return(
        <View>
          <Text>
            {value}
          </Text>
        </View>
    )
}

export default ConfirmAgentLoad;