import axios from "axios";
import { ADD_ACCOUNT, GET_USER_ACCOUNTS} from "../constants";
//import {IP} from '../../../../config'


const add_account = (account) => {
  return {
    type: ADD_ACCOUNT,
    account,
  };
};

const get_user_accounts = (accounts) => {
  return {
    type: GET_USER_ACCOUNTS,
    accounts,
  };
};


export const addAccounts = (name, cbu, dni) => (dispatch) => {
  return axios
    .post("http://localhost:1337/api/accounts", {
      nameEntity: name,
      cbu_cvu: cbu,
      accountNumber: dni,
    })
    .then((res) => dispatch(add_account(res.data)));
};

export const fetchUserAccounts = (id) => (dispatch) =>
  axios
    .get(`http://localhost:1337/api/accounts/${id}`)
    .then((res) => dispatch(get_user_accounts(res.data)));


export const deleteAccounts = (id) => (dispatch) =>
  axios
    .delete(`http://localhost:1337/api/accounts/${id}`)
    .then((res) => dispatch(fetchUserAccounts()));
    //axios.delete
