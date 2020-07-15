import axios from "axios";
import { IP } from "../../../../config";
import {
  FETCH_TRANSACTIONS,
  FETCH_USER_TRANSACTIONS,
  FETCH_USER_TRANSACTION,
  SET_TRANSACTION_VALUE,
  SET_AG_TRANSACTION_VALUE
} from "../constants";

export const fetch_transactions = (transactions) => {
  return {
    type: FETCH_TRANSACTIONS,
    transactions,
  };
};

const fetch_users_transactions = (userTransactions) => {
  return {
    type: FETCH_USER_TRANSACTIONS,
    userTransactions,
  };
};

const fetch_users_transaction = (userTransaction) => {
  return {
    type: FETCH_USER_TRANSACTION,
    userTransaction,
  };
};

export const newTransactionValue = (transactionValue) => {
  return {
    type: SET_TRANSACTION_VALUE,
    transactionValue,
  };
};

export const newAgtTransactionValue = (transactionValueAgn) => {
  return {
   type: SET_AG_TRANSACTION_VALUE,
   transactionValueAgn 
  }
}

export const getTransactions = () => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions`)
    .then((res) => dispatch(fetch_transactions(res.data)))
    .catch((err) => console.log(err, "ERROR"));
};

export const getUserTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:1337/api/transactions/${id}`)
    .then((res) => res.data)
    .then((transactions) => dispatch(fetch_users_transactions(transactions)));
};

export const getUserTransaction = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:1337/api/transactions/user/${id}`)
    .then((res) => {
      console.log("Transaction en action", res.data);
      return res.data;
    })
    .then((transaction) => dispatch(fetch_users_transaction(transaction)));
};

export const updateAmountAgent = () => (dispatch) => {
  return axios
  .post(`http://${IP}:1337/api/agent/editdailyamount`)
  .then(res => res.data)
  .then((data=> dispatch(newAgtTransactionValue(data))))
}


