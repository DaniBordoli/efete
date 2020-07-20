import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTransactions } from "../../redux/store/actions/transactions";
import UserHome from "./userHome";
import { View } from "react-native";

export default ({ navigation, route }) => {
  const [loading, setLoader] = useState(false);

  const dispatch = useDispatch();

  const userTransactions = useSelector(
    (state) => state.transactions.userTransactions
  );

  const userRole = useSelector(
    (state) => state.users.user.role
  )

  useEffect(() => {
    dispatch(getUserTransactions(route.params.user)).then(() =>
      setLoader(true)
    );
  }, []);

  return (
    <View>
      <UserHome
        userTransactions={userTransactions}
        navigation={navigation}
        loading={loading}
        userRole={userRole}
      />
    </View>
  );
};
