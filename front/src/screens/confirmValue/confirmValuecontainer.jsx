import React from 'react'
import { View, Text, FlatList, ScrollView } from "react-native";
import {useSelector} from 'react-redux'
import ConfirmValue from './confirmValue'

const confirmValueContainer = ({navigation, route}) =>{


    return(
        <ConfirmValue
        navigation={navigation}
        value={route.params.value}
        agente={route.params.index}
        />
    )
}

export default confirmValueContainer