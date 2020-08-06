import { LOGIN_USER, MODE, TOKEN, TCN, ERROR_VERIFICATION } from "../constants";

const initialState = {
  user: {},
  mode: true, // true
  token: "",
  tcn: null,
  errorVerification: {},
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
    case ERROR_VERIFICATION:
      return { ...state, errorVerification: action.error };

    default:
      return state;
  }
};
