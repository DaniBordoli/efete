import axios from "axios";
import { IP } from "../../../../config";
import { LOGIN_USER } from "../constants";

const login_user = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const logUser = () => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/users/login`)
    .then((res) => dispatch(login_user(res.data)));
};

export const editUser = (userData) => () => {
  return axios
    .patch(`http://${IP}:1337/api/users/editprofile`, userData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err, "ERROR"));
};
