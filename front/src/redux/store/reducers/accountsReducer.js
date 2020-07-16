import {
  ADD_ACCOUNT,
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
} from "../constants";

const initialState = {
  account: {},
  accounts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, account: action.account };
    case GET_USER_ACCOUNTS:
      return { ...state, accounts: action.accounts };
    case GET_USER_SINGLE_ACCOUNT:
      return { ...state, account: action.account };

    default:
      return state;
  }
};
