import axios from "axios";
import { IP } from "../../../../config";



export const editAgent = (agentData) => () => {
  return axios
    .patch(`http://${IP}:1337/api/agents/editprofile`, agentData)
    .then((res) => console.log("Agente editado"))
    .catch((err) => console.log(err, "ERROR"));
};