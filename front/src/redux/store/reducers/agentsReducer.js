<<<<<<< HEAD
import { SET_AGENT, CREATE_AGENT, CREATE_STORE, GET_USER_AGENTS } from "../constants";
=======
import {
  SET_AGENT,
  CREATE_AGENT,
  CREATE_STORE,
  SET_AGENTS,
} from "../constants";
>>>>>>> d6136235ed51e375c1edd47b6c14fab7c36fe26b

const initialState = {
  agent: {},
  agents: [],
  newAgent: {},
  newStore: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AGENT:
      return { ...state, agent: action.agent};
    case CREATE_AGENT:
      return {...state, newAgent: action.newAgent};
    case GET_USER_AGENTS:
      return {...state, agents: action.agents}    
      return { ...state, agent: action.agent };
    case SET_AGENTS:
      return { ...state, agents: action.agents };
    case CREATE_AGENT:
      return { ...state, newAgent: action.newAgent };
    case CREATE_STORE:
      return { state, newStore: action.newStore };
    default:
      return state;
  }
};
