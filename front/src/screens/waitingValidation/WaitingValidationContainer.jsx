import React, { useEffect, useState } from "react";
import WaitingValidation from "./WaitingValidation";
import { useDispatch, useSelector } from "react-redux";
import { fetchValidation } from "../../redux/store/actions/users";

const WaitingValidationContainer = ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const tcn = useSelector((state) => state.users.tcn);
  const token = useSelector((state) => state.users.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validateIdentity = () => {
    return dispatch(fetchValidation(user._id, tcn, token)).then(() =>
      setLoading(true)
    );
  };
  const handleLoading = () => {
    setLoading(false);
  };
  
  useEffect(() => {
    tcn ? validateIdentity() : setLoading(false);
  }, [tcn]);

  return (
    <WaitingValidation
      navigation={navigation}
      loading={loading}
      user={user}
      handleLoading={handleLoading}
    />
  );
};

export default WaitingValidationContainer;
