import axios from "axios";
import { IP } from "../../../../config";
import {
  SET_AGENT,
  CREATE_AGENT,
  CREATE_STORE,
  SET_AGENTS,
} from "../constants";
import { login_user } from "../actions/users";

export const setAgent = (agent) => {
  return {
    type: SET_AGENT,
    agent,
  };
};

export const setAgents = (agents) => {
  return {
    type: SET_AGENTS,
    agents,
  };
};

const newAgent = (newAgent) => {
  return {
    type: CREATE_AGENT,
    newAgent,
  };
};

const createNewStore = (newStore) => {
  return {
    type: CREATE_STORE,
    newStore,
  };
};
export const editAgent = (agentData) => (dispatch) => {
  return axios
    .patch(`http://${IP}:1337/api/agents/editprofile`, agentData)
    .then((res) => dispatch(setAgent(res.data)))
    .catch((err) => console.log(err, "ERROR"));
};

export const fetchAgent = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/agents/${id}`)
    .then((res) => dispatch(setAgent(res.data)));

export const changeDailyAmount = (amountTransaction) => () =>
  axios.patch(`http://${IP}:1337/api/agents/transaction`, amountTransaction);

export const createAgent = (
  name,
  address,
  ubicacion,
  cuil,
  dailyAmount,
  user
) => (dispatch) => {
  return axios
    .post(`http://${IP}:1337/api/agents/createagent`, {
      name: name,
      address: address,
      ubicacion: ubicacion,
      cuil: cuil,
      dailyAmount: dailyAmount,
      user: user,
    })
    .then((res) => {
      console.log(res.data, "RESDATAA");
      dispatch(login_user(res.data.userUpdated));
      dispatch(
        newAgent({
          name: name,
          address: address,
          cuil: cuil,
          dailyAmount: dailyAmount,
          user: user,
        })
      );
      return dispatch(
        createNewStore({
          name: name,
          address: address,
          ubicacion: ubicacion,
          cuil: cuil,
          dailyAmount: dailyAmount,
          user: user,
          id: res.data.agentCreated._id,
        })
      );
    });
};

export const fetchAgents = () => (dispatch) => {
  axios
    .get(`http://${IP}:1337/api/agents`)
    .then((res) => dispatch(setAgents(res.data)));
};
