import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  transactions: transactionsReducer,
  users: usersReducer,
});
