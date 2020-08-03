import React, { useState } from "react";
import SelectOtherAmount from "./SelectOtherAmount";
import {useSelector} from 'react-redux'

import { View } from "react-native";
import { fondoColor } from "../../Common/constans";

export default ({ navigation }) => {
  const [value, setValue] = useState("");

  const mode = useSelector(
    (state) => state.users.mode
  );
  const handleValue = (value) => {
    setValue(value);
  };

  return (
    
      <SelectOtherAmount
        handleValue={handleValue}
        navigation={navigation}
        value={value}
        mode={mode}
      />
   
  );
};
