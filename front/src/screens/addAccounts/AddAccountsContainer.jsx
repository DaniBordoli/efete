import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import { addAccounts, fetchBanks, fetchMainAccount } from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const banks = useSelector((state) => state.accounts.banks);
  
  const dispatch = useDispatch();

  const mode = useSelector(
    (state) => state.users.mode
  );
  const [bankId, setBankId] = useState("");
  const handleBank = (id) => {
    setBankId(id);
  };

  const [cbu, setCbu] = useState("");
  const handleCbu = (cbu) => {
    setCbu(cbu);
  };

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");


  const [accountNumber, setAccountNumber] = useState('');
  const handleAccountNumber = (accountNumber) => {
    setAccountNumber(accountNumber);
    accountNumber.length == 22
    ? setIsValid(true)
    : setIsValid(false);
  
  };

  
  useEffect(() => {
    dispatch(fetchBanks());
  }, []);

  const handleSubmit = () => {
    dispatch(addAccounts(bankId, cbu, accountNumber, user._id))
    .then((data)=>
    {
      console.log("DATA ERROrrr;;;;;;;;;S",data)
      if(data.accounts){
      console.log("ESTo NO LLEGA")
      dispatch(fetchMainAccount(user._id))
      navigation.navigate("Accounts");
    }
    if (data.error){
      setMessage(data.error.messageAccount)
    }
    })
    
  };

  

  return (
    <AddAccounts
      banks={banks}
      handleCbu={handleCbu}
      handleAccountNumber={handleAccountNumber}
      handleSubmit={handleSubmit}
      handleBank={handleBank}
      navigation={navigation}
      cbu={cbu}
      accountNumber={accountNumber}
      isValid={isValid}
      mode={mode}
      message={message}
    />
  );
};
