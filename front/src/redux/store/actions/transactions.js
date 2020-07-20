import axios from "axios";
import { IP } from "../../../../config";
import {
  FETCH_TRANSACTIONS,
  FETCH_USER_TRANSACTIONS,
  FETCH_USER_TRANSACTION,
  SET_TRANSACTION_VALUE,
  SET_AG_TRANSACTION_VALUE,
  SET_TRANSACTION,
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

const newTransaction = (transaction) => {
  return {
    type: SET_TRANSACTION,
    transaction,
  };
};

const fetch_agent_transactions = (agentTransactions) => {
  return {
    type: FETCH_AGENT_TRANSACTIONS,
    agentTransactions,
  };
};

export const newAgtTransactionValue = (transactionValueAgn) => {
  return {
    type: SET_AG_TRANSACTION_VALUE,
    transactionValueAgn,
  };
};

export const getTransactions = () => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions`)
    .then((res) => dispatch(fetch_transactions(res.data)))
    .catch((err) => console.log(err, "ERROR"));
};

export const getUserTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions/${id}`, {
      withCredentials: true,
    })
    .then((res) => res.data)
    .then((transactions) => dispatch(fetch_users_transactions(transactions)));
};

export const getUserTransaction = (id) => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions/user/${id}`)
    .then((res) =>res.data)
    .then((transaction) => dispatch(fetch_users_transaction(transaction)));
};

export const updateAmountAgent = (value) => (dispatch) => {
  return axios
  .post(`http://${IP}:1337/api/agent/editdailyamount`, value)
  .then(res => res.data)
  .then((amount=> dispatch(newAgtTransactionValue(amount))))
}


export const createTransaction = (transaction) => (dispatch) =>
  axios.post(`http://${IP}:1337/api/transactions`, transaction).then((res) => {
    dispatch(newTransaction(res.data));
  });
export const getAgentTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions/agent/${id}`)
    .then((res) => {
      return res.data;
    })
    .then((transactions) => dispatch(fetch_agent_transactions(transactions)));
};
