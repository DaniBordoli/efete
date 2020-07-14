import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";
import accountsReducer from "./accountsReducer";

export default combineReducers({
    transactions: transactionsReducer,
    accounts: accountsReducer,
    
  });