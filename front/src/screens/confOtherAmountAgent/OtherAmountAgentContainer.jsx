import  React, {useState} from "react";
import  { View } from "react-native";
import { updateAmountAgent } from '../../redux/store/actions/transactions'
import { useDispatch , useSelector} from "react-redux";
import OtherAmountAgent from "./OtherAmountAgent";


const OtherAmountContainer = ({ navigation }) => {
  const dispatch =  useDispatch();
  const agent = useSelector(state => state.agents.agent)

  const [value, setValue] = useState(0)

  const handlerValue = (value) =>{
    setValue(value)
  }

  const handlerSubmit = () => {
    dispatch(updateAmountAgent(value,agent._id))  }

    return(
        <View>
          <OtherAmountAgent
          //  onChangeInput={onChangeInput}
          handlerValue={handlerValue}
          handlerSubmit={handlerSubmit}
          navigation={navigation}
          value={value}
          />
        </View>
    )
}

export default OtherAmountContainer;