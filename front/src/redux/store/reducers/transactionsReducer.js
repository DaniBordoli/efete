import { FETCH_TRANSACTIONS } from "../constants";

const initialState = {
  transactions: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    default:
      return state;
  }
};
