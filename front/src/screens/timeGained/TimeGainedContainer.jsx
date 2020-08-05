import React, { useEffect, useState } from "react";
import TimeGained from "./TimeGained";
import { useDispatch, useSelector } from "react-redux";

const TimeGainedContainer = ({ navigation }) => {
  const user = useSelector((state) => state.users.user);

  return <TimeGained />;
};

export default TimeGainedContainer;
