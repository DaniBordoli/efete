import {
  GET_SHARED_AGENTS,
  CREATE_SHARED_AGENT,
  GET_SHARED_USERS,
} from "../constants";

const initialState = {
  sharedAgents: [],
  newSharedAgent: {},
  sharedUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHARED_AGENTS:
      return { ...state, sharedAgents: action.agents };
    case CREATE_SHARED_AGENT:
      return { ...state, newSharedAgent: action.agent };
    case GET_SHARED_USERS:
      return { ...state, sharedUsers: action.users };
    default:
      return state;
  }
};
