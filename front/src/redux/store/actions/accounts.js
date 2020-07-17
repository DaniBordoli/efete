import axios from "axios";
import {
  ADD_ACCOUNT,
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
} from "../constants";
import { IP } from "../../../../config";

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

const get_user_single_account = (account) => {
  return {
    type: GET_USER_SINGLE_ACCOUNT,
    account,
  };
};

export const addAccounts = (name, cbu, accountNumber, user) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/accounts`, {
      nameEntity: name,
      cbu_cvu: cbu,
      accountNumber: accountNumber,
      user: user,
    })
    .then((res) => dispatch(add_account(res.data)));
};

export const fetchUserAccounts = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/accounts/${id}`)
    .then((res) => dispatch(get_user_accounts(res.data)));

export const fetchUserSingleAccount = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/accounts/user/${id}`)
    .then((res) => dispatch(get_user_single_account(res.data)));

export const deleteAccounts = (id, userId) => (dispatch) =>
  axios.delete(`http://${IP}:1337/api/accounts/${id}/${userId}`).then((res) => {
    dispatch(get_user_single_account({}));
    dispatch(get_user_accounts(res.data));
  });
