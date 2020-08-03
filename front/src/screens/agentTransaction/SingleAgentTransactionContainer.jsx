import React from "react";
import SingleAgentTransaction from "./SingleAgentTransaction";
import {useSelector} from 'react-redux'

const SingleAgentTransactionContainer = ({ navigation, route }) => {
  
  const mode = useSelector(
    (state) => state.users.mode
  );
  return (
    <SingleAgentTransaction
      navigation={navigation}
      transaction={route.params.item}
      mode={mode}
    />
  );
};

export default SingleAgentTransactionContainer;
