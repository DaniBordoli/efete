import axios from "axios";
import { IP } from "../../../../config";
import { SET_AGENT, CREATE_AGENT } from "../constants";
import { login_user } from "../actions/users";

const setAgent = (agent) => {
  return {
    type: SET_AGENT,
    agent,
  };
};

const newAgent = (newAgent) => {
  return {
    type: CREATE_AGENT,
    newAgent,
  };
};

export const editAgent = (agentData) => () => {
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

export const createAgent = (name, address, cuil, dailyAmount, codigoQr) => (
  dispatch
) => {
  return axios
    .post(`http://${IP}:1337/api/agents/createagent`, {
      name: name,
      address: address,
      cuil: cuil,
      dailyAmount: dailyAmount,
      codigoQr: codigoQr,
    })
    .then((res) => {
      dispatch(login_user(res.data));
      dispatch(newAgent(res.data));
    });
};
