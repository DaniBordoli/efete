import React, { useEffect } from "react";
import WaitingValidation from "./WaitingValidation";
import { useDispatch, useSelector } from "react-redux";
import { generateToken } from "../../redux/store/actions/users";

const WaitingValidationContainer = ({ navigation }) => {
  const user = useSelector((state) => state.users.user);

  useEffect(() => {
    dispatch(fetchValidation(user._id, user.tcn)).then((agent) =>
      setLoading(true)
    );
  }, []);

  return <WaitingValidation navigation={navigation} />;
};

export default WaitingValidationContainer;
