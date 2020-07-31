import { LOGIN_USER, MODE, TOKEN } from "../constants";

const initialState = {
  user: {},
  mode: true,
  token: "",
  tcn: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.user };
    case MODE:
      return { ...state, mode: action.mode };
    case TOKEN:
      return { ...state, token: action.token };
    case TCN:
      return { ...state, tcn: action.tcn };
    default:
      return state;
  }
};
