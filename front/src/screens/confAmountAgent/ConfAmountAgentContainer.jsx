import  React, {useState} from "react";
import  { View } from "react-native";
import { newAgtTransactionValue } from '../../redux/store/actions/transactions'
import ConfAmountAgent from "./ConfAmountAgent"
import ConfirmAgentLoad from '../ConfirmAgentLoad/ConfirmAgentLoad'
import { useDispatch } from "react-redux";


const ConfAmountAgentContainer = ({ navigation }) => {
  const dispatch =  useDispatch();
   
  const [value, setValue] = useState(0)

  const handlerValue = (item) =>{
    const total =+ item
    setValue(item)
  }

  const handlerSubmit = () => {
    dispatch(newAgtTransactionValue(value))
  }
  

    return(
        <View>
          <ConfAmountAgent
          //  onChangeInput={onChangeInput}
          handlerValue={handlerValue}
          handlerSubmit={handlerSubmit}
          navigation={navigation}
          value={value}
          />
        </View>
    )
}

export default ConfAmountAgentContainer;