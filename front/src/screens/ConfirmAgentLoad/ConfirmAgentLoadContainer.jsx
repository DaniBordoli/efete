import  React, {useState} from "react";
import  { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ConfirmAgentLoad from './ConfirmAgentLoad'

const ConfirmAgentLoadContainer = () => {
  
  const value = useSelector(state => state.transactions.transactionValueAgn )
  console.log('Value Container',value)

  return(
      <View>
        <ConfirmAgentLoad
         value={value}
        />
      </View>
  )


}


export default ConfirmAgentLoadContainer;