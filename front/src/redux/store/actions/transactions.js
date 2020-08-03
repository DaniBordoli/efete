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
      "https://sandbox.bind.com.ar/v1/banks/322/accounts/21-1-99999-4-6/owner/transaction-request-types/DEBIN/transaction-requests",

      {
        to: {
          cbu: transaction.originAccountCbu,
        },
        value: {
          currency: "ARS",
          amount: transaction.amount + 50,
        },
        concept: "EXP",
        expiration: 23,
      },
      {
        headers: {
          Authorization:
            "JWT eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIra0d3ckdBb1lpR2RyVjVYSU5aYnBFQ255dU9FSHExb090N2RvdVVTckNrPSIsImNyZWF0ZWQiOjE1OTY0NjU1MTUzMzIsIm5hbWUiOiJGYWN1bmRvIE5vdmFybyBIdWV5byIsImV4cCI6MTU5NjQ5NDMxNX0.g1wv2Yr3TJ0ozGgVFHHuygoRT0yMJlO7ocFYoj_GmEiiDrsj-PkYPMeoPh2r7NG9yrL4RGQl_5cpFvrjl3uFqQ",
        },
      }
    )
    .then(() => {
      axios.post(
        "https://sandbox.bind.com.ar/v1/banks/322/accounts/21-1-99999-4-6/owner/transaction-request-types/TRANSFER/transaction-requests",

        {
          to: {
            cbu: transaction.cbu,
          },
          value: {
            currency: "ARS",
            amount: transaction.amount + 25,
          },
          description: "Transfer de prueba",
          concept: "VAR",
          emails: ["facunovaroh@gmail.com"],
        },
        {
          headers: {
            Authorization:
              "JWT eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIra0d3ckdBb1lpR2RyVjVYSU5aYnBFQ255dU9FSHExb090N2RvdVVTckNrPSIsImNyZWF0ZWQiOjE1OTY0NjU1MTUzMzIsIm5hbWUiOiJGYWN1bmRvIE5vdmFybyBIdWV5byIsImV4cCI6MTU5NjQ5NDMxNX0.g1wv2Yr3TJ0ozGgVFHHuygoRT0yMJlO7ocFYoj_GmEiiDrsj-PkYPMeoPh2r7NG9yrL4RGQl_5cpFvrjl3uFqQ",
          },
        }
      );
    })

    .then(() => {
      return axios
        .post(`http://${IP}:1337/api/transactions`, transaction)
        .then((res) => dispatch(newTransaction(res.data)));
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
