import axios from "axios";
import { IP } from "../../../../config";
import { SET_AGENT } from "../constants";

const setAgent = (agent) => {
  return {
    type: SET_AGENT,
    agent,
  };
};

export const editAgent = (agentData) => () => {
  return axios
    .patch(`http://${IP}:1337/api/agents/editprofile`, agentData)
    .then((res) => console.log("Agente editado"))
    .catch((err) => console.log(err, "ERROR"));
};

export const fetchAgent = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/agents/${id}`)
    .then((res) => dispatch(setAgent(res.data)));
