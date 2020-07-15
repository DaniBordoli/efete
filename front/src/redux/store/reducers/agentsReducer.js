import { SET_AGENT } from "../constants";

const initialState = {
  agent: {},
  agents: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AGENT:
      return { ...state, agent: action.agent };
    default:
      return state;
  }
};
