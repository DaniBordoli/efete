import  React, {useState} from "react";
import  { View, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAgentLoad from './ConfirmAgentLoad'
import { useNavigation } from '@react-navigation/native'


const ConfirmAgentLoadContainer = () => {

  const navigation = useNavigation();

  
  const value = useSelector(state => state.agents.agent.dailyAmount )

  return(
      <View>
        <ConfirmAgentLoad
         value={value}
         
        />
      </View>
  )


}


export default ConfirmAgentLoadContainer;