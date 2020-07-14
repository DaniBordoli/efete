import { ADD_ACCOUNT } from "../constants";

const initialState = {
  accounts: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, accounts: action.accounts };
    default:
      return state;
  }
};
