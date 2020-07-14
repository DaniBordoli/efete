import axios from "axios";
import { ADD_ACCOUNT } from "../constants";

const add_account = (account) => {
  return {
    type: ADD_ACCOUNT,
    account
  
  };
};




export const addAccounts = (name,cbu,dni) => (dispatch) => {
    return axios
        .post ("http://localhost:1337/api/accounts",{nameEntity:name,cbu_cvu:cbu,accountNumber:dni})
        .then ((res) => dispatch(add_account(res.data)));
}