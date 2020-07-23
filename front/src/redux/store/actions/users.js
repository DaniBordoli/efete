import axios from "axios";
import { IP } from "../../../../config";
import { LOGIN_USER } from "../constants";

export const login_user = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const logUser = (user) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/users/login`, user, {
      withCredentials: true,
      /* headers: {
        "Content-Type": "application/json",
      }, */
    })
    .then((res) => dispatch(login_user(res.data)))
    .catch(() => {
      dispatch(login_user({ message: "Alguno de los datos es inválido" }));
    });
};

export const register = (firstName, lastName, dni, password, username) => (
  dispatch
) => {
  return axios
    .post(`http://${IP}:1337/api/users/register`, {
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      username: username,
      password: password,
    })
    .then((res) => dispatch(login_user(res.data)));
};

export const editUser = (userData) => () => {
  return axios
    .patch(`http://${IP}:1337/api/users/editprofile`, userData)
    .then((res) => console.log("Usuario editado"))
    .catch((err) => console.log(err, "ERROR"));
};

export const verifyEmail = (id) => (dispatch) =>
  axios.get(`http://${IP}:1337/api/users/sendVerificationEmail/${id}`);

export const logOutUser = () => (dispatch) =>
  axios
    .post(`http://${IP}:1337/api/users/logout`)
    .then(() => dispatch(login_user({})));
