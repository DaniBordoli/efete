import {
  ADD_ACCOUNT,
  GET_USER_ACCOUNTS,
  GET_USER_SINGLE_ACCOUNT,
  FETCH_BANKS,
} from "../constants";

const initialState = {
  account: {},
  accounts: [],
  banks: [],
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
    

    default:
      return state;
  }
};
