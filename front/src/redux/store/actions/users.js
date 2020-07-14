import { LOGIN_USER } from "../constants";

const login_user = (user) => {
  return {
    type: LOGIN_USER,
    user,
  };
};

export const logUser = () => (dispatch) => {
  return axios
    .post("http://localhost:1337/api/users/login")
    .then((res) => dispatch(login_user(res.data)));
};
