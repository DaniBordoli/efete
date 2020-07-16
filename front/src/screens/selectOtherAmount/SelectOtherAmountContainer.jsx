import React, { useState } from "react";
import SelectOtherAmount from "./SelectOtherAmount";

import { View } from "react-native";

export default ({ navigation }) => {
  const [value, setValue] = useState("");

  const handleValue = (value) => {
    setValue(value);
  };

  return (
    <View>
      <SelectOtherAmount
        handleValue={handleValue}
        navigation={navigation}
        value={value}
      />
    </View>
  );
};
