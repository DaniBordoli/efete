import { combineReducers } from "redux";
import transactionsReducer from "./transactionsReducer";
import accountsReducer from "./accountsReducer";
import usersReducer from "./usersReducer";
import agentsReducer from "./agentsReducer";
import sharedAgentsReducer from "./sharedAgentsReducer";

export default combineReducers({
  transactions: transactionsReducer,
  accounts: accountsReducer,
  users: usersReducer,
  agents: agentsReducer,
  sharedAgents: sharedAgentsReducer,
});
