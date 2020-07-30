import { LOGIN_USER , MODE} from "../constants";

const initialState = {
  user: {},
  mode: false, // true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.user };
    case MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
