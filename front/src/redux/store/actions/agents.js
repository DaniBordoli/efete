import axios from "axios";
import { IP } from "../../../../config";
<<<<<<< HEAD
import { SET_AGENT, CREATE_AGENT, CREATE_STORE,GET_USER_AGENTS } from "../constants";
=======
import {
  SET_AGENT,
  CREATE_AGENT,
  CREATE_STORE,
  SET_AGENTS,
} from "../constants";
>>>>>>> d6136235ed51e375c1edd47b6c14fab7c36fe26b
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
<<<<<<< HEAD
  }
}

const get_user_agents = (agents) => {
  return {
    type: GET_USER_AGENTS,
    agents,
  }
}

=======
  };
};
>>>>>>> d6136235ed51e375c1edd47b6c14fab7c36fe26b
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
  url,
  user
) => (dispatch) => {
  console.log(url, "URLACA");
  console.log(name, "NAMEACA");
  return axios
    .post(`http://${IP}:1337/api/agents/createagent`, {
      name: name,
      address: address,
      ubicacion: ubicacion,
      cuil: cuil,
      dailyAmount: dailyAmount,
      imageUrl: url,
      user: user,
    })
    .then((res) => {
      dispatch(login_user(res.data));
      dispatch(
        newAgent({
          name: name,
          address: address,
          cuil: cuil,
          dailyAmount: dailyAmount,
          imageUrl: url,
          user: user,
        })
      );
      dispatch(
        createNewStore({
          name: name,
          address: address,
          ubicacion: ubicacion,
          cuil: cuil,
          dailyAmount: dailyAmount,
          user: user,
        })
      );
    });
};

export const fetchUserAgents = (id) => (dispatch) =>
  axios
    .get(`http://${IP}:1337/api/agents/user/${id}`)
    .then((res) => {console.log("OTRO", res.data)
    dispatch(get_user_agents(res.data))});


export const deleteAgents = (id, userId) => (dispatch) =>
  axios.delete(`http://${IP}:1337/api/agents/${id}/${userId}`).then((res) => {
      dispatch(get_user_agents(res.data));
    });
export const fetchAgents = () => (dispatch) => {
  axios
    .get(`http://${IP}:1337/api/agents`)
    .then((res) => dispatch(setAgents(res.data)));
};
