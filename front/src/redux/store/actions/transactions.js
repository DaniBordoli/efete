import axios from "axios";
import { FETCH_TRANSACTIONS } from "../constants";
import { IP } from "../../../../config";
import { FETCH_TRANSACTIONS, SET_TRANSACTION_VALUE } from "../constants";

export const fetch_transactions = (transactions) => {
  return {
    type: FETCH_TRANSACTIONS,
    transactions,
  };
};

export const newTransactionValue = (transactionValue) => {
  return {
    type: SET_TRANSACTION_VALUE,
    transactionValue,
  };
};

export const getTransactions = () => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions`)
    .then((res) => dispatch(fetch_transactions(res.data)))
    .catch((err) => console.log(err, "ERROR"));
};
