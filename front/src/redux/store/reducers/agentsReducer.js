import { SET_AGENT, CREATE_AGENT } from "../constants";

const initialState = {
  agent: {},
  agents: [],
  newAgent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AGENT:
      return { ...state, agent: action.agent };
    case CREATE_AGENT:
      return {...state, newAgent: action.newAgent}  
    default:
      return state;
  }
};
