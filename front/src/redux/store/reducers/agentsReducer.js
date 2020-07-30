import { SET_AGENT, CREATE_AGENT, CREATE_STORE, GET_USER_AGENTS, SET_AGENTS } from "../constants";


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
