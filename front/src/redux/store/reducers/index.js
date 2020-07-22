import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";
import accountsReducer from "./accountsReducer";
import usersReducer from "./usersReducer";
import agentsReducer from "./agentsReducer";


export default combineReducers({
  transactions: transactionsReducer,
  accounts: accountsReducer,
  users: usersReducer,
  agents: agentsReducer,
});
