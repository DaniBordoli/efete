import { FETCH_TRANSACTIONS, FETCH_USER_TRANSACTIONS, FETCH_USER_TRANSACTION } from "../constants";

const initialState = {
  transactions: [],
  userTransactions : [],
  userTransaction : {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    
      case FETCH_USER_TRANSACTIONS:
      return { ...state, userTransactions: action.userTransactions};

      case FETCH_USER_TRANSACTION:
        return { ...state, userTransaction: action.userTransaction}
      
    default:
      return state;
  }
};
