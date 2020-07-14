import React from "react";
import {useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUserTransaction } from '../../redux/store/actions/transactions'
import SingleUserTransaction from "./SingleUserTransaction"
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native'



const SingleUserTransactionContainer = ({ navigation, route})=>{
    const dispacth = useDispatch();

    const getOneUserTransaction = useSelector((state) => state.transactions.userTransaction)

    useEffect(()=>{
        dispacth(getUserTransaction(route.params.id)) // Hardcodeado, despues pasar id
    }, [])


    
    return(
        <View>
         <SingleUserTransaction
         getOneUserTransaction={getOneUserTransaction}
         navigation={navigation}
         />
       </View>
    )
}

export default SingleUserTransactionContainer