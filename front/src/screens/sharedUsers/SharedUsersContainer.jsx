import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SharedUsers from "./SharedUsers";
import {
  fetchAgentSharedUsers,
  deleteSharedUser,
  editAccess,
} from "../../redux/store/actions/sharedAgents";

export default ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [loading, setLoader] = useState(false);

  const mode = useSelector((state) => state.users.mode);

  const agent = route.params.agent;
  const sharedUsers = useSelector((state) => state.sharedAgents.sharedUsers);

  useEffect(() => {
    dispatch(fetchAgentSharedUsers(agent)).then(() => {
      setLoader(true);
    });
  }, []);

  const handleDelete = (username) => {
    dispatch(deleteSharedUser(username, agent));
  };
  const handleEdit = (username, access) => {
    let accessUser = access === "owner" ? "employee" : "owner";
    dispatch(editAccess(username, agent, accessUser));
  };

  return (
    <SharedUsers
      navigation={navigation}
      sharedUsers={sharedUsers}
      loading={loading}
      handleDelete={handleDelete}
      mode={mode}
      handleEdit={handleEdit}
    />
  );
};
