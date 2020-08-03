import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllAgents from "../allAgents/AllAgents";
import {
    fetchUserAgents,
    deleteAgents,
  
} from "../../redux/store/actions/agents";


export default ({navigation}) => {

    const dispatch = useDispatch();
    const [loading, setLoader] = useState(false);
  
    const mode = useSelector(
      (state) => state.users.mode
    );
  
    const agentsUser = useSelector((state) => state.agents.agents);
    const user = useSelector((state) => state.users.user);

    useEffect(() => {
        dispatch(fetchUserAgents(user._id))
        .then(() => {
          setLoader(true);
        });
      }, []);

    const handleDelete = (agentId) => {
        dispatch(deleteAgents(agentId, user._id))
      };

    

    return (
        <AllAgents
          navigation={navigation}
          agentsUser={agentsUser}
          loading={loading}
          handleDelete={handleDelete}
          mode={mode}
          
        />
    );
}