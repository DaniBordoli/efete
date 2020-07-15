import  React, {useState} from "react";
import  { View } from "react-native";
import   ConfAmountAgent  from "./ConfAmountAgent"

const ConfAmountAgentContainer = () => {

  const [inputValue, setInputValue] = useState('');
  const onChangeInput = (text) => {
    console.log(inputValue)  
    setInputValue(text)
      
  }
  
  const [btnValue, setBtnValue] = useState('');
  const valueHandler = (number) =>{
    console.log('BTN VALUE', btnValue)
    setBtnValue(number)
  }
  const [counter, setCounter] = useState(0)
  const handlerCounter = (num) => {
    console.log(counter)
    setCounter(num += 1)
  }

    return(
        <View>
          <ConfAmountAgent
           onChangeInput={onChangeInput}
           valueHandler={valueHandler}
           handlerCounter={handlerCounter}
          />
        </View>
    )
}

export default ConfAmountAgentContainer;