import React, { useState } from "react";
import SelectAmount from "./SelectAmount";

import { View } from "react-native";

export default ({ navigation }) => {
  const [value, setValue] = useState(0);

  const handleValue = (item) => {
    setValue(item);
  };

  return (
      <SelectAmount
        handleValue={handleValue}
        navigation={navigation}
        value={value}
      />
  );
};
