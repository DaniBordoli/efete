import React, { useState } from "react";
import SelectAmount from "./SelectAmount";
import { useSelector } from "react-redux";

export default ({ navigation, route }) => {
  const map = route.params.map;
  const [value, setValue] = useState(0);
  const mode = useSelector((state) => state.users.mode);
  const handleValue = (item) => {
    setValue(item);
  };

  return (
    <SelectAmount
      handleValue={handleValue}
      navigation={navigation}
      value={value}
      mode={mode}
      map={map}
    />
  );
};
