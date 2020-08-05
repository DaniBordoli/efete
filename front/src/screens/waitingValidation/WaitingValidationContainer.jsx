import React, { useEffect, useState } from "react";
import WaitingValidation from "./WaitingValidation";
import { useDispatch, useSelector } from "react-redux";
import { fetchValidation, setTcn } from "../../redux/store/actions/users";

const WaitingValidationContainer = ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const tcn = useSelector((state) => state.users.tcn);
  const token = useSelector((state) => state.users.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validateIdentity = () => {
    return dispatch(fetchValidation(user._id, tcn, token));
  };

  useEffect(() => {
    tcn
      ? validateIdentity().then(() => {
          setLoading(true);
        })
      : setLoading(false);
  }, [tcn]);

  const handleTcn = () => {
    dispatch(setTcn(null));
  };

  return (
    <WaitingValidation
      navigation={navigation}
      loading={loading}
      user={user}
      handleTcn={handleTcn}
    />
  );
};

export default WaitingValidationContainer;
