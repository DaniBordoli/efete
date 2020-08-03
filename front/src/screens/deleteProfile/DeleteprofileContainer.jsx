import React, { useEffect, useState } from "react";
import DeleteProfile from "./DeleteProfile";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../redux/store/actions/users";

const DeleteProfileContainer = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const handleSubmit = () => {
    dispatch(deleteUser(user._id)).then(() => navigation.navigate("Login"));
  };

  return <DeleteProfile navigation={navigation} handleSubmit={handleSubmit} />;
};

export default DeleteProfileContainer;
