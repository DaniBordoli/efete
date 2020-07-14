import axios from "axios";
import { FETCH_TRANSACTIONS, FETCH_USER_TRANSACTIONS, FETCH_USER_TRANSACTION } from "../constants";

const fetch_transactions = (transactions) => {
  return {
    type: FETCH_TRANSACTIONS,
    transactions,
  };
};

const fetch_users_transactions = (userTransactions) => {
  return {
    type: FETCH_USER_TRANSACTIONS,
    userTransactions,
  }
}

const fetch_users_transaction = (userTransaction) => {
  return {
    type: FETCH_USER_TRANSACTION,
    userTransaction,
  }
}


export const getTransactions = () => (dispatch) => {
  return axios
    .get("http://localhost:1337/api/transactions")
    .then((res) => dispatch(fetch_transactions(res.data)));
};

export const getUserTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:1337/api/transactions/${id}`)
    .then((res) => res.data)
    .then(transactions => dispatch(fetch_users_transactions(transactions)))
}

export const getUserTransaction = (id) => (dispatch) => {
  return axios
   .get(`http://localhost:1337/api/transactions/user/${id}`)
   .then((res) => {console.log('Transaction en action', res.data)
     return res.data})
   .then(transaction => dispatch(fetch_users_transaction(transaction)))
}