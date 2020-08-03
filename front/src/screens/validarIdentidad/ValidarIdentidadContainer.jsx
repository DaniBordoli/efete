import React from "react";
import ValidarIdentidad from "./ValidarIdentidad";
import { useDispatch , useSelector} from "react-redux";
import { generateToken } from "../../redux/store/actions/users";

const ValidarIdentidadContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  
  const mode = useSelector(
    (state) => state.users.mode
  );
  const handleToken = () => {
    console.log("LLEGUE A HANDLETOKEN");
    dispatch(generateToken());
    navigation.navigate("OpenCamera", { identity: true });
  };

  return <ValidarIdentidad mode={mode} handleToken={handleToken} />;
};

export default ValidarIdentidadContainer;
