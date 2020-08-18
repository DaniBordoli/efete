import axios from "axios";
import { IP } from "../../../../config";
import {
  GET_SHARED_AGENTS,
  CREATE_SHARED_AGENT,
  GET_SHARED_USERS,
} from "../constants";

sharedAgents = (agents) => {
  return {
    type: GET_SHARED_AGENTS,
    agents,
  };
};

sharedUsers = (users) => {
  return {
    type: GET_SHARED_USERS,
    users,
  };
};

newSharedAgent = (agent) => {
  return {
    type: CREATE_SHARED_AGENT,
    agent,
  };
};

export const shareAgent = (username, agent, access) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/sharedAgents`, {
      username: username,
      agent: agent,
      access: access,
    })
    .then((res) => dispatch(newSharedAgent(res.data)));
};

export const fetchUserSharedAgents = (username) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/sharedAgents/${username}`)
    .then((res) => dispatch(sharedAgents(res.data)));

export const deleteSharedAgent = (id, username) => (dispatch) =>
  axios
    .delete(`http://${IP}:1337/api/sharedAgents/${id}/${username}`)
    .then((res) => dispatch(sharedAgents(res.data)));

export const fetchAgentSharedUsers = (agent) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/sharedAgents/access/${agent}`)
    .then((res) => dispatch(sharedUsers(res.data)));

export const deleteSharedUser = (username, agent) => (dispatch) =>
  axios
    .delete(
      `http://${IP}:1337/api/sharedAgents/removeAccess/${username}/${agent}`
    )
    .then((res) => dispatch(sharedUsers(res.data)));

export const editAccess = (username, agent, access) => (dispatch) =>
  axios
    .patch(`http://${IP}:1337/api/sharedAgents`, {
      username: username,
      agent: agent,
      access: access,
    })
    .then((res) => dispatch(sharedUsers(res.data)));
