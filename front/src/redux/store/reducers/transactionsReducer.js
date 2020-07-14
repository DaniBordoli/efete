import { FETCH_TRANSACTIONS, SET_TRANSACTION_VALUE } from "../constants";

const initialState = {
  transactions: [],
  transactionValue: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    case SET_TRANSACTION_VALUE:
      return { ...state, transactionValue: action.transactionValue };
    default:
      return state;
  }
};
