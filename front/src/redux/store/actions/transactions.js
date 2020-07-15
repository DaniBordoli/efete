import axios from "axios";
import { IP } from "../../../../config";
import {
  FETCH_TRANSACTIONS,
  FETCH_USER_TRANSACTIONS,
  FETCH_USER_TRANSACTION,
  SET_TRANSACTION_VALUE,
  FETCH_AGENT_TRANSACTIONS,
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

const fetch_agent_transactions = (agentTransactions) => {
  return {
    type: FETCH_AGENT_TRANSACTIONS,
    agentTransactions,
  };
};

/////////////////////////////////////////////////////////////////////////////////////

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

export const getAgentTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:1337/api/transactions/agent`, id)
    .then((res) => {
      return res.data;
    })
    .then((transactions) => dispatch(fetch_agent_transactions(transactions)));
};
