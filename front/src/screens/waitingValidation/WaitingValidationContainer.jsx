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

  useEffect(() => {
    tcn
      ? dispatch(fetchValidation(user._id, tcn, token)).then(() =>
          setLoading(true)
        )
      : setLoading(false);
  }, [tcn]);

  return (
    <WaitingValidation navigation={navigation} loading={loading} user={user} />
  );
};

export default WaitingValidationContainer;
