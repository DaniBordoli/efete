import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import { addAccounts, fetchBanks, fetchMainAccount } from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const banks = useSelector((state) => state.accounts.banks);
  
  const dispatch = useDispatch();

  const [bankId, setBankId] = useState("");
  const handleBank = (id) => {
    console.log("id", id);
    setBankId(id);
  };

  const [cbu, setCbu] = useState("");
  const handleCbu = (cbu) => {
    console.log("CBU",cbu)
    setCbu(cbu);
  };

  const [isValid, setIsValid] = useState(false);


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
    .then(()=>dispatch(fetchMainAccount(user._id)))
    
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
    />
  );
};
