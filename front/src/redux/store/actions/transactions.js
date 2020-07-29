import axios from "axios";
import { setAgent } from "./agents";
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
import Axios from "axios";

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
    .then((res) => res.data)
    .then((transaction) => dispatch(fetch_users_transaction(transaction)));
};

export const updateAmountAgent = (value, id) => (dispatch) => {
  return axios
    .patch(`http://${IP}:1337/api/agents/editdailyamount`, {
      dailyAmount: value,
      _id: id,
    })
    .then((res) => res.data)
    .then((agent) => dispatch(setAgent(agent)));
};

export const createTransaction = (transaction) => (dispatch) =>
  axios
    .post(
      `
https://sandbox.bind.com.ar/v1/banks/322/accounts/21-1-99999-4-6/owner/transaction-request-types/TRANSFER/transaction-requests

`,
      {
        to: {
          cbu: transaction.destinationAccount,
        },
        value: {
          currency: "ARS",
          amount: transaction.amount,
        },
        description: "Transfer de prueba",
        concept: "VAR",
        emails: ["facunovaroh@gmail.com"],
      }
    )
    .then(() => {
      axios
        .post(`http://${IP}:1337/api/transactions`, transaction)
        .then((res) => {
          dispatch(newTransaction(res.data));
        });
    });

export const getAgentTransactions = (id) => (dispatch) => {
  return axios
    .get(`http://${IP}:1337/api/transactions/agent/${id}`)
    .then((res) => {
      return res.data;
    })
    .then((transactions) => dispatch(fetch_agent_transactions(transactions)));
};

// export const createPdf = (transaction) => () =>
//   axios
//     .post(`http://${IP}:1337/api/pdf/create`, transaction)
//     .then(() =>
//       axios.get(`http://${IP}:1337/api/pdf/fetch`, { responsType: "blob" })
//     )
//     .then((res) => {
//       const pdfBlob = new Blob([res.data], { type: "application/pdf" });
//       saveAs(pdfBlob, "transacción.pdf");
//     });
