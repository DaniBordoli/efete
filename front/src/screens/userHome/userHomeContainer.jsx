import  React from "react";
import  { useDispatch, useSelector } from "react-redux";
import  { useEffect } from "react";
import  { getUserTransactions } from "../../redux/store/actions/transactions";
import  UserHome from "./userHome";
import  { View } from "react-native";

export default ( { navigation }) => {
  const dispatch = useDispatch();
  
  const userTransactions  = useSelector((state) => state.transactions.userTransactions);
  useEffect(() => {
    dispatch(getUserTransactions('5f064320cefb0877fc05368b')); // Hardcodeado => Despues pasar Id.
  }, []);


  // useEffect(() => {
  //   console.log('Hola') Consologue cada vez que renderiza
  // }, [boolean]); renderiza cuando cambia el boooleano

  return (
    <View>
      <UserHome 
      userTransactions={userTransactions}
      navigation={navigation}
      />
    </View>
  );
};
