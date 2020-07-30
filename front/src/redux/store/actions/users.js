import axios from "axios";
import { IP } from "../../../../config";
import { LOGIN_USER, MODE, TOKEN } from "../constants";

export const login_user = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const setToken = (token) => {
  return {
    type: TOKEN,
    token,
  };
};

export const mode = (mode) => {
  return {
    type: MODE,
    mode,
  };
};

export const logUser = (user) => (dispatch) => {
  console.log("USUARIO",user)
  return axios
    .post(`http://${IP}:1337/api/users/login`, user, {
      withCredentials: true,
    })
    .then((res) => dispatch(login_user(res.data)))
    .catch(() => {
      dispatch(login_user({ message: "Alguno de los datos es inválido" }));
    });
};

export const register = (
  firstName,
  lastName,
  dni,
  password,
  username,
  gender
) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/users/register`, {
      firstName: firstName,
      lastName: lastName,
      dni: dni,
      username: username,
      password: password,
      gender: gender,
    })
    .then((res) => dispatch(login_user(res.data)));
};

export const editUser = (userData) => (dispatch) => {
  return axios
    .patch(`http://${IP}:1337/api/users/editprofile`, userData)
    .then((res) => dispatch(login_user(res.data)))
    .catch((err) => console.log(err, "ERROR"));
};

export const verifyEmail = (id) => (dispatch) =>
  axios.get(`http://${IP}:1337/api/users/sendVerificationEmail/${id}`);

export const logOutUser = () => (dispatch) =>
  axios
    .post(`http://${IP}:1337/api/users/logout`)
    .then(() => dispatch(login_user({})));

export const generateToken = () => (dispatch) => {
  return axios
    .post(
      " http://150.136.1.69:8011/CHUTROFINAL/API_ABIS/Autorizacion/token.php",

      "username=plataforma5rostro&password=ghRSl3tb8Axwp4P",

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      dispatch(setToken(res.data.data.token));
    });
};

export const validateIdentity = (url, dni, gender, token) => (dispatch) => {
  console.log(dni, gender, token, "DATOOOSACA");
  return axios
    .post(
      "http://150.136.1.69:8011/CHUTROFINAL/API_ABIS/apiInline_v3.php",

      { imagen: url, dni: dni, sexo: gender },

      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data, "RESDATACA");
    });
};
