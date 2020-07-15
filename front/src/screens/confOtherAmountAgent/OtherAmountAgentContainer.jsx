import  React, {useState} from "react";
import  { View } from "react-native";
import { newAgtTransactionValue } from '../../redux/store/actions/transactions'
import { useDispatch } from "react-redux";
import OtherAmountAgent from "./otherAmountAgent";


const OtherAmountContainer = ({ navigation }) => {
  const dispatch =  useDispatch();
   
  const [value, setValue] = useState(0)

  const handlerValue = (item) =>{
    setValue(item)
  }

  const handlerSubmit = () => {
    dispatch(newAgtTransactionValue(value))
  }

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