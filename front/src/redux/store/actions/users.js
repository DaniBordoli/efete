import axios from "axios";
import { IP } from "../../../../config";

export const editUser = (userData) => () => {
  return axios
    .patch(`http://${IP}:1337/api/users/editprofile`, userData)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err, "ERROR"));
};
