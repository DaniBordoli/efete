import React, { useState } from "react";
import SelectOtherAmount from "./SelectOtherAmount";
import { useSelector } from "react-redux";

import { View } from "react-native";
import { fondoColor } from "../../Common/constans";

export default ({ navigation }) => {
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);

  const mode = useSelector((state) => state.users.mode);
  const handleValue = (value) => {
    setValue(value);
    if (Number(value) > 2000) setAlert(true);
    else setAlert(false);
  };

  return (
    <SelectOtherAmount
      handleValue={handleValue}
      navigation={navigation}
      value={value}
      mode={mode}
      alert={alert}
    />
  );
};
