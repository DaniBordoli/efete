import axios from "axios";
import {
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
  FETCH_BANKS,
  SET_MAIN_ACCOUNT,
} from "../constants";
import { IP } from "../../../../config";

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

const get_banks = (banks) => {
  return {
    type: FETCH_BANKS,
    banks,
  };
};

export const fetchMainAccount = (userId) => (dispatch) => {
  axios
    .get(`http://${IP}:1337/api/accounts/main/${userId}`)
    .then((res) => dispatch(get_user_single_account(res.data)));
};

export const setMainAccount = (id, userId) => (dispatch) => {
  axios
    .patch(`http://${IP}:1337/api/accounts/${id}/${userId}`)
    .then((res) => dispatch(get_user_accounts(res.data)));
};

export const addAccounts = (name, cbu, accountNumber, user) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/accounts`, {
      nameEntity: name,
      cbu_cvu: cbu,
      accountNumber: accountNumber,
      user: user,
    })
    .then((res) => dispatch(get_user_accounts(res.data)));
};

export const fetchBanks = () => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/banks/`)
    .then((res) => dispatch(get_banks(res.data)))
    .catch((err) => console.log(err, "ERROR"));

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
