import React, { useState } from "react";
import SelectOtherAmount from "./SelectOtherAmount";
import { useSelector } from "react-redux";

export default ({ navigation, route }) => {
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
      map={route.params.map}
    />
  );
};
