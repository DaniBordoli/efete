import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddAccounts from "../addAccounts/AddAccounts";
import {
  addAccounts,
  fetchBanks,
  fetchMainAccount,
} from "../../redux/store/actions/accounts";

export default ({ navigation }) => {
  const user = useSelector((state) => state.users.user);
  const banks = useSelector((state) => state.accounts.banks);

  const dispatch = useDispatch();

  const mode = useSelector((state) => state.users.mode);
  const [bankId, setBankId] = useState("");
  const handleBank = (id) => {
    setBankId(id);
    id.length > 0 ? setValidBank(false) : setValidBank(true);
  };

  const [cbu, setCbu] = useState("");
  const handleCbu = (cbu) => {
    setCbu(cbu);
    cbu.length > 0 ? setValidCbu(false) : setValidCbu(false);
  };

  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [validBank, setValidBank] = useState(true);
  const [validCbu, setValidCbu] = useState(true);

  const [accountNumber, setAccountNumber] = useState("");
  const handleAccountNumber = (accountNumber) => {
    setAccountNumber(accountNumber);
    accountNumber.length == 22 ? setIsValid(true) : setIsValid(false);
  };

  useEffect(() => {
    dispatch(fetchBanks());
  }, []);

  const handleSubmit = () => {
    dispatch(addAccounts(bankId, cbu, accountNumber, user._id)).then((data) => {
      if (data.accounts) {
        dispatch(fetchMainAccount(user._id));
        navigation.navigate("Accounts");
      }
      if (data.error) {
        setMessage(data.error.messageAccount);
      }
    });
  };

  const resetMessage = () => {
    setMessage("");
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
      resetMessage={resetMessage}
      validBank={validBank}
      validCbu={validCbu}
    />
  );
};
