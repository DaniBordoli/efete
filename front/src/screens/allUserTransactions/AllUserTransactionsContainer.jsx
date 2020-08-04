import React from "react";
import AllUserTransactions from "./AllUserTransactions";
import {useSelector} from 'react-redux'
const AllUserTransactionsContainer = ({ navigation, route }) => {
  
  const mode = useSelector(
    (state) => state.users.mode
  );
  return (
    <AllUserTransactions
      navigation={navigation}
      userTransactions={route.params.userTransactions}
      mode={mode}
    />
  );
};

export default AllUserTransactionsContainer;
