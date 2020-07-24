import  React, {useState} from "react";
import  { View } from "react-native";
import { updateAmountAgent } from '../../redux/store/actions/transactions'
import ConfAmountAgent from "./ConfAmountAgent"
import ConfirmAgentLoad from '../ConfirmAgentLoad/ConfirmAgentLoad'
import { useDispatch , useSelector } from "react-redux";


const ConfAmountAgentContainer = ({ navigation }) => {
  const dispatch =  useDispatch();
   const agent = useSelector(state => state.agents.agent)
  const [value, setValue] = useState(0)

  const handlerValue = (item) =>{
    setValue(item)
  }

  const handlerSubmit = () => {
    dispatch(updateAmountAgent(value,agent._id))
  }
  

    return(
          <ConfAmountAgent
          //  onChangeInput={onChangeInput}
          handlerValue={handlerValue}
          handlerSubmit={handlerSubmit}
          navigation={navigation}
          value={value}
          />
       
    )
}

export default ConfAmountAgentContainer;