import axios from "axios";
import { ADD_ACCOUNT } from "../constants";

const add_account = () => {
  return {
    type: ADD_ACCOUNT,
    account 
  
  };
};




export const addAccounts = () => (dispatch) => {
    return axios
        .post ("http://localhost:1337/api/accounts")
        .then ((res) => dispatch(add_account(res.data)));
}