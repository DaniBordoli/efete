import {
  ADD_ACCOUNT,
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
  FETCH_BANKS,
  SET_MAIN_ACCOUNT,
  ERROR_ACCOUNT,
} from "../constants";

const initialState = {
  account: {},
  accounts: [],
  banks: [],
  mainAccount: {},
  errorAccount: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ACCOUNT:
      return { ...state, account: action.account };
    case GET_USER_ACCOUNTS:
      return { ...state, accounts: action.accounts };
    case GET_USER_SINGLE_ACCOUNT:
      return { ...state, account: action.account };
    case FETCH_BANKS:
      return { ...state, banks: action.banks };
    case SET_MAIN_ACCOUNT:
      return { ...state, mainAccount: action.account };c
    case ERROR_ACCOUNT:
     return { ...state, errorAccount: action.error}

    default:
      return state;
  }
};
