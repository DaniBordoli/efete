import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTransactions } from "../../redux/store/actions/transactions";
import UserHome from "./userHome";
import { View } from "react-native";

export default ({ navigation }) => {
  const [loading, setLoader] = useState(false);

  const dispatch = useDispatch();

  const userTransactions = useSelector(
    (state) => state.transactions.userTransactions
  );
  useEffect(() => {
    dispatch(getUserTransactions("5f06118a3988da4a1972ad61")).then(() =>
      setLoader(true)
    ); // Hardcodeado => Despues pasar Id.
  }, []);

  // useEffect(() => {
  //   console.log('Hola') Consologue cada vez que renderiza
  // }, [boolean]); renderiza cuando cambia el boooleano

  return (
    <View>
      <UserHome
        userTransactions={userTransactions}
        navigation={navigation}
        loading={loading}
      />
    </View>
  );
};
