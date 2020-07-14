import { FETCH_TRANSACTIONS, FETCH_USER_TRANSACTIONS, FETCH_USER_TRANSACTION, SET_TRANSACTION_VALUE } from "../constants";

const initialState = {
  transactions: [],
  userTransactions : [],
  userTransaction : {},
  transactions: [],
  transactionValue: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transactions: action.transactions };
    
      case FETCH_USER_TRANSACTIONS:
    return { ...state, userTransactions: action.userTransactions};

    case FETCH_USER_TRANSACTION:
      return { ...state, userTransaction: action.userTransaction}
      
    case SET_TRANSACTION_VALUE:
      return { ...state, transactionValue: action.transactionValue };
    
      default:
      return state;
  }
};
