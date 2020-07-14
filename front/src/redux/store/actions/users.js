import { LOGIN_USER } from "../constants";
import axios from "axios";

const login_user = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const logUser = (user) => (dispatch) => {
  return axios
    .post("http://localhost:1337/api/users/login", user)
    .then((res) => dispatch(login_user(res.data)))
    .catch(() =>
      dispatch(login_user({ message: "El usuario o contraseña no existe" }))
    );
};
