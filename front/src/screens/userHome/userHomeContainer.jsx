import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserTransactions } from "../../redux/store/actions/transactions";
import UserHome from "./userHome";
import moment from 'moment';

export default ({ navigation, route }) => {
  const [loading, setLoader] = useState(false);
  const [time, setTime] = useState('')

  const dispatch = useDispatch();

  const userTransactions = useSelector(
    (state) => state.transactions.userTransactions
    )


  const userRole = useSelector(
    (state) => state.users.user.role
  );

    useEffect(()=>{
      var date = moment()
      var fecha = date.locale('es').format('dddd MM-MMMM')
      
      setTime(fecha)
      
    })

  useEffect(() => {
    dispatch(getUserTransactions(route.params.user)).then(() =>
      setLoader(true)
    )
  }, []);
  

  
  return (
      <UserHome
        navigation={navigation}
        loading={loading}
        userRole={userRole}
        time={time}
        userTransactions={userTransactions}
      />
  );
};
